import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/HomePage/MainSection/MainSection"
import ServiceSection from "../components/HomePage/ServiceSection"
import SolutionsSection from "../components/HomePage/SolutionsSection"
import PartnersSection from "../components/shared/GenericPartnersSection"
import NewsSection from "../components/HomePage/NewsSection"

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
  } = post

  return (
    <Layout>
      <SEO title={meta.title} pathname={location.pathname} />
      <MainSection {...homeMainSection} />
      <ServiceSection {...homeServiceSection} />
      <SolutionsSection solutions={homeSolutionsSection} />
      <PartnersSection {...homePartnersSection} partners={partnersData} />
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
