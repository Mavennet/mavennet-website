import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/SolutionsPage/MainSection"
import SolutionsSection from "../components/SolutionsPage/SolutionsSection"
import PreviousWorkSection from "../components/SolutionsPage/PreviousWorkSection"

const SolutionsPage = ({ data, location }) => {
  const { title, subtitle, solutions, previousWork, meta } = data.pagesYaml

  return (
    <Layout>
      <SEO title={meta.title} pathname={location.pathname} />
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
      meta {
        title
      }
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
