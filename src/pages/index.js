import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/HomePage/MainSection/MainSection"
import ServiceSection from "../components/HomePage/ServiceSection"
import SolutionsSection from "../components/HomePage/SolutionsSection"
import PartnersSection from "../components/shared/GenericPartnersSection"
import AwardsSection from "../components/shared/AwardsSection"
import NewsSection from "../components/HomePage/NewsSection"
import RAndDSection from "../components/HomePage/RAndDSection"

import { usePartnersData } from "../hooks/use-partners-data"

const IndexPage = ({ data, location }) => {
  const post = data.pagesYaml
  const partnersData = usePartnersData()

  const {
    meta,
    homeMainSection,
    homeServiceSection,
    homeSolutionsSection,
    homeNewsSection,
    homePartnersSection,
    homeRandDSection,
  } = post

  return (
    <Layout fillFooter="#F9F5FE">
      <SEO title={meta.title} pathname={location.pathname} />
      <MainSection {...homeMainSection} />
      <SolutionsSection {...homeSolutionsSection} />
      <ServiceSection {...homeServiceSection} />
      <RAndDSection {...homeRandDSection} />
      <PartnersSection {...homePartnersSection} partners={partnersData} />
      <AwardsSection title="Awards and Recognition" />
      <NewsSection {...homeNewsSection} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "Home" } }) {
      title
      meta {
        title
      }
      homeMainSection {
        ctaText
        slogan
        subtitle
      }
      homeSolutionsSection {
        title
        subtitle
        solutionList {
          item {
            title
            image
            logo
            description
            slug
            ctaText
          }
        }
      }
      homeServiceSection {
        title
        description
        ctaText
        steps {
          item {
            image
            title
            description
          }
        }
      }
      homeRandDSection {
        title
        subtitle
        rAndDList {
          item {
            title
            description
            image
          }
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
