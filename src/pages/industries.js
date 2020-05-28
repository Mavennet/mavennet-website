import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import MainSection from "../components/IndustriesPage/MainSection"
import IndustriesSection from "../components/IndustriesPage/IndustriesSection"

const IndustriesPage = ({ data }) => {
  const post = data.pagesYaml
  const { title, subtitle, industries } = post

  return (
    <Layout>
      <MainSection title={title} subtitle={subtitle} />
      <IndustriesSection industries={industries} />
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </Layout>
  )
}

export default IndustriesPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "Industries" } }) {
      title
      subtitle
      industries {
        title
        description
        ctaText
        slug
        image
      }
    }
  }
`
