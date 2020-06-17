import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/ServicePage/MainSection"

const ServicePage = ({ data, location }) => {
  const post = data.pagesYaml

  const { meta } = post

  return (
    <Layout contactUsHidden>
      <SEO title={meta.title} pathname={location.pathname} />
      <MainSection {...post} />
    </Layout>
  )
}

export default ServicePage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "Service" } }) {
      title
      meta {
        title
      }
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
