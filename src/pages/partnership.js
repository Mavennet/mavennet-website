import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import Container from "../components/base/Container"

import MainSection from "../components/Partnership/MainSection"
import PartnersSection from "../components/Partnership/PartnersSection"

import { usePartnersData } from "../hooks/use-partners-data"

const PartnershipPage = ({ data }) => {
  const post = data.pagesYaml

  const partnersData = usePartnersData()

  const { partnersMainSection } = post

  return (
    <Layout>
      <MainSection {...partnersMainSection} />
      <Container>
        <PartnersSection partners={partnersData} />
      </Container>
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
