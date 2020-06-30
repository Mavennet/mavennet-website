import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/ApproachPage/MainSection"

const ApproachPage = ({ data, location }) => {
  const post = data.pagesYaml

  const { meta } = post

  return (
    <Layout>
      <SEO title={meta.title} pathname={location.pathname} />
      <MainSection {...post} />
    </Layout>
  )
}

export default ApproachPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "Approach" } }) {
      title
      meta {
        title
      }
      approachMainSection {
        slogan
      }
      approachStepsSection {
        item {
          cta {
            ctaText
            ctaType
            to
          }
          stepsList
          description
          title
        }
      }
      approachContactUsSection {
        title
        ctaText
      }
    }
  }
`
