import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/base/Layout"

import MainSection from "../components/SolutionsPage/MainSection"
import SolutionsSection from "../components/SolutionsPage/SolutionsSection"

const SolutionsPage = ({ data }) => {
  const { title, subtitle, solutions, previousWork } = data.pagesYaml

  const PreviousWorkItem = ({ item }) => {
    const { title, image, link } = item
    return (
      <li>
        <h3>{title}</h3>
        <a href={link}>
          <img src={image} alt="title" />
        </a>
      </li>
    )
  }

  const PreviousWorkList = ({ previousWork }) => (
    <ul>
      {previousWork.map(item => (
        <PreviousWorkItem key={item.title} item={item} />
      ))}
    </ul>
  )

  return (
    <Layout>
      <MainSection title={title} subtitle={subtitle} />
      <SolutionsSection solutions={solutions} />
      {/* <main>
        <section className="solutions">
          <SolutionList solutions={solutions} />
        </section>
        <section className="previous-work">
          <h3>{previousWork.title}</h3>
          <PreviousWorkList previousWork={previousWork.previousWorkList} />
        </section>
      </main> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "Solutions" } }) {
      title
      subtitle
      previousWork {
        title
        previousWorkList {
          image
          link
          title
        }
      }
      solutions {
        ctaImage
        description
        image
        slug
        title
        sectionType
      }
    }
  }
`

export default SolutionsPage
