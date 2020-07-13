import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import MainSection from "../components/NotFoundPage/MainSection"
import SEO from "../components/base/SEO"

const ComingSoonPage = ({ data, location }) => {
  const { comingSoonMainSection, meta } = data.pagesYaml
  return (
    <Layout footerHidden>
      <SEO title={meta.title} pathname={location.pathname} />
      <MainSection {...comingSoonMainSection} />
    </Layout>
  )
}

export const query = graphql`
  query {
    pagesYaml(title: { eq: "coming-soon" }) {
      title
      meta {
        title
      }
      comingSoonMainSection {
        title
        description
        ctaText
        image
      }
    }
  }
`

export default ComingSoonPage
