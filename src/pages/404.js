import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import MainSection from "../components/NotFoundPage/MainSection"

const NotFoundPage = ({ data }) => {
  const { notFoundMainSection } = data.pagesYaml
  return (
    <Layout footerHidden>
      <MainSection {...notFoundMainSection} />
    </Layout>
  )
}

export const query = graphql`
  query {
    pagesYaml(title: { eq: "not-found" }) {
      title
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
