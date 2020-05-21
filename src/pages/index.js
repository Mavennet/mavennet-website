import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout/Layout"

import MainSection from "../components/HomePage/MainSection/MainSection"
import ServiceSection from "../components/HomePage/ServiceSection"
import PartnersSection from "../components/HomePage/PartnersSection"
import NewsSection from "../components/HomePage/NewsSection"

import { usePartnersData } from "../hooks/use-partners-data"

const IndexPage = ({ data }) => {
  const post = data.pagesYaml
  const partnersData = usePartnersData()

  const {
    homeMainSection,
    homeServiceSection,
    homeNewsSection,
    homePartnersSection,
  } = post

  return (
    <Layout>
      <MainSection {...homeMainSection} />
      <ServiceSection {...homeServiceSection} />
      <PartnersSection {...homePartnersSection} partners={partnersData} />
      <NewsSection {...homeNewsSection} />
    </Layout>
  )
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
        title
        ctaText
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
        title
        ctaText
      }
      homeNewsSection {
        title
        ctaText
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
