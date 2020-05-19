import React from "react"

import { graphql } from "gatsby"

const PartnershipPage = ({ data }) => {
  const post = data.pagesYaml

  return <pre>{JSON.stringify(post, null, 2)}</pre>
}

export default PartnershipPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "Partnership" } }) {
      id
      meta {
        title
      }
      partnersWhySection {
        whyList {
          item {
            title
            description
          }
        }
      }
      partnersPartnersSection {
        partnersList {
          item {
            name
            link
            logo
          }
        }
      }
      partnersModelSection {
        modelList {
          item {
            title
            description
            image
          }
        }
      }
      partnersMainSection {
        title
        description
        ctaText
      }
    }
  }
`
