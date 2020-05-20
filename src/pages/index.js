import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout/Layout"

import MainSection from "../components/HomePage/MainSection/MainSection"
import ServiceSection from "../components/HomePage/ServiceSection"

const IndexPage = ({ data }) => {
  const post = data.pagesYaml

  const { homeMainSection, homeServiceSection } = post

  return (
    <Layout>
      <MainSection {...homeMainSection} />
      <ServiceSection {...homeServiceSection} />
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
        partners {
          item {
            title
            image
            link
          }
        }
      }
      homeNewsSection {
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
