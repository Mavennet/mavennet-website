import React from "react"
import { graphql } from "gatsby"

const Solutions = ({ data }) => {
  const {
    page_title: pageTitle,
    page_subtitle: pageSubtitle,
    previous_work: previousWork,
    solution_list: solutionList,
  } = data.allPagesYaml.nodes[0]

  const SolutionItem = ({ item }) => {
    const { title, description, image, slug, cta_image: ctaImage } = item
    return (
      <li>
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={image} alt={title} />
      </li>
    )
  }

  const SolutionList = ({ solutionList }) => (
    <ul>
      {solutionList.map(item => (
        <SolutionItem key={item.title} item={item} />
      ))}
    </ul>
  )

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

  const PreviousWorkList = ({ previousWorkList }) => (
    <ul>
      {previousWorkList.map(item => (
        <PreviousWorkItem key={item.title} item={item} />
      ))}
    </ul>
  )

  return (
    <>
      <div className="jumbotron">
        <h1>{pageTitle}</h1>
        <h2>{pageSubtitle}</h2>
      </div>
      <main>
        <section className="solutions">
          <SolutionList solutionList={solutionList} />
        </section>
        <section className="previous-work">
          <h3>{previousWork.title}</h3>
          <PreviousWorkList
            previousWorkList={previousWork.previous_work_list}
          />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  query {
    allPagesYaml {
      nodes {
        page_title
        page_subtitle
        previous_work {
          previous_work_list {
            image
            link
            title
          }
          title
        }
        solution_list {
          cta_image
          description
          image
          slug
          title
        }
      }
    }
  }
`

export default Solutions
