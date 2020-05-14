import React from "react"

const ServicePage = ({ data }) => {
  const post = data.pagesYaml

  return <pre>{JSON.stringify(post, null, 2)}</pre>
}

export default ServicePage

export const query = graphql`
  query {
    pagesYaml(identifier: { eq: "service" }) {
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
