import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/base/Layout"

import MainSection from "../components/SolutionsPage/MainSection"
import SolutionsSection from "../components/SolutionsPage/SolutionsSection"
import PreviousWorkSection from "../components/SolutionsPage/PreviousWorkSection"

const SolutionsPage = ({ data }) => {
  const { title, subtitle, solutions, previousWork } = data.pagesYaml

  return (
    <Layout>
      <MainSection title={title} subtitle={subtitle} />
      <SolutionsSection solutions={solutions} />
      <PreviousWorkSection previousWork={previousWork} />
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
