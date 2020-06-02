import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/base/Layout"

import MainSection from "../components/Partnership/MainSection"
import PartnersSection from "../components/Partnership/PartnersSection"
import ModelSection from "../components/Partnership/ModelSection"
import WhySection from "../components/Partnership/WhySection"

import { usePartnersData } from "../hooks/use-partners-data"

const PartnershipPage = ({ data }) => {
  const post = data.pagesYaml

  const partnersData = usePartnersData()

  const { partnersMainSection, partnersModelSection, partnersWhySection } = post

  return (
    <Layout>
      <MainSection {...partnersMainSection} />
      <PartnersSection partners={partnersData} />
      <ModelSection {...partnersModelSection} />
      <WhySection {...partnersWhySection} />
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
        title
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
        title
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
