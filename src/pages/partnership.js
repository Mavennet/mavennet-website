import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/base/Layout"

import MainSection from "../components/Partnership/MainSection"

const PartnershipPage = ({ data }) => {
  const post = data.pagesYaml

  const { partnersMainSection } = post

  return (
    <Layout>
      <MainSection {...partnersMainSection} />
    </Layout>
  )
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
