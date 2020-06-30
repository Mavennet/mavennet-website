import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/SolutionsPage/MainSection"
import SolutionsSection from "../components/SolutionsPage/SolutionsSection"

const SolutionsPage = ({ data, location }) => {
  const { title, subtitle, solutions, meta } = data.pagesYaml

  return (
    <Layout>
      <SEO title={meta.title} pathname={location.pathname} />
      <MainSection title={title} subtitle={subtitle} />
      <SolutionsSection solutions={solutions} />
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
