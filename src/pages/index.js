import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout/Layout"

const IndexPage = ({ data }) => {
  const post = data.pagesYaml

  return (
    <Layout>
      <h1>Ue</h1>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    pagesYaml(identifier: { eq: "home" }) {
      title
      homeMainSection {
        ctaText
        slogan
      }
      homeServiceSection {
        steps {
          item {
            image
            title
            description
          }
        }
      }
      homeSolutionsSection {
        item {
          title
          image
          description
          slug
          ctaText
        }
      }
      homePartnersSection {
        partners {
          item {
            title
            image
            link
          }
        }
      }
      homeNewsSection {
        news {
          item {
            title
            image
            link
          }
        }
      }
    }
  }
`
