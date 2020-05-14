import React from "react"

import Header from "../components/Header/Header"

const IndexPage = ({ data }) => {
  const post = data.pagesYaml

  return <pre>{JSON.stringify(post, null, 2)}</pre>
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
