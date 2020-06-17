import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import MainSection from "../components/NotFoundPage/MainSection"
import SEO from "../components/base/SEO"

const NotFoundPage = ({ data, location }) => {
  const { notFoundMainSection, meta } = data.pagesYaml
  return (
    <Layout footerHidden>
      <SEO title={meta.title} pathname={location.pathname} />
      <MainSection {...notFoundMainSection} />
    </Layout>
  )
}

export const query = graphql`
  query {
    pagesYaml(title: { eq: "not-found" }) {
      title
      meta {
        title
      }
      notFoundMainSection {
        title
        description
        ctaText
        image
      }
    }
  }
`

export default NotFoundPage
