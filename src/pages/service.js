import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import MainSection from "../components/ServicePage/MainSection"

const ServicePage = ({ data }) => {
  const post = data.pagesYaml

  return (
    <Layout contactUsHidden>
      <MainSection {...post} />
    </Layout>
  )
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
        }
      }
      serviceContactUsSection {
        title
        ctaText
      }
    }
  }
`
