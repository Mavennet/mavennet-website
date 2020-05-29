import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"

import MainSection from "../components/IndustriesPost/MainSection"
import OpportunitiesSection from "../components/IndustriesPost/OpportunitiesSection"
import ExploreSection from "../components/IndustriesPost/ExploreSection"
import GetInTouchSection from "../components/IndustriesPost/GetInTouchSection"
import TestimonialSection from "../components/shared/TestimonialSection"
import NewsSection from "../components/shared/NewsSection"

const IndustryPost = ({ data }) => {
  const post = data.markdownRemark.frontmatter

  const {
    title,
    mainSection,
    opportunitySection,
    solutionsSection,
    impactSection,
    getInTouchSection,
    testimonialSection,
    newsSection,
  } = post

  return (
    <Layout>
      <MainSection {...mainSection} />
      <OpportunitiesSection {...opportunitySection} />
      <ExploreSection {...solutionsSection} />
      <GetInTouchSection {...getInTouchSection} />
      <TestimonialSection testimonialList={testimonialSection} />
      <NewsSection {...newsSection} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        mainSection {
          industry
          description
          image
          logo
          text
        }
        title
        opportunitySection {
          items {
            item {
              image
              number
              description
            }
          }
          title
        }
        solutionsSection {
          items {
            item {
              image
              title
              description
              ctaText
              slug
            }
          }
          title
        }
        impactSection {
          items {
            item {
              title
              image
              description
            }
          }
          title
        }
        getInTouchSection {
          ctaText
          title
        }
        testimonialSection {
          testimony {
            author
            position
            companyLogo
            message
          }
        }
        newsSection {
          news {
            item {
              title
              link
              image
            }
          }
          title
        }
      }
    }
  }
`

export default IndustryPost
