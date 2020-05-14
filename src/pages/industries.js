import React from "react"
import { graphql } from "gatsby"

const IndustriesPage = ({ data }) => {
  const post = data.pagesYaml

  return <pre>{JSON.stringify(post, null, 2)}</pre>
}

export default IndustriesPage

export const query = graphql`
  query {
    pagesYaml(identifier: { eq: "industries" }) {
      title
      subtitle
      industries {
        title
        description
        ctaText
        slug
        image
      }
      industrySolutionsSection {
        industrySolutionsList {
          slug
          title
          image
        }
        ctaText
        title
      }
    }
  }
`
