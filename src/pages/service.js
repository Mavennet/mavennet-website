import React from "react"
import { graphql } from "gatsby"

const ServicePage = ({ data }) => {
  const post = data.pagesYaml

  return <pre>{JSON.stringify(post, null, 2)}</pre>
}

export default ServicePage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "Service" } }) {
      title
      serviceMainSection {
        slogan
      }
      serviceStepsSection {
        item {
          cta {
            ctaText
            ctaType
          }
          stepsList
          title
          description
        }
      }
      serviceContactUsSection {
        title
        ctaText
      }
    }
  }
`
