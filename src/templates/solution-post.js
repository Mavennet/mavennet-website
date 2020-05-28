import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"

import MainSection from "../components/SolutionPost/MainSection"
import GrowthSection from "../components/SolutionPost/GrowthSection"
import SolutionDescriptionSection from "../components/SolutionPost/SolutionDescriptionSection"
import FeaturesSection from "../components/SolutionPost/FeaturesSection"
import DemoSection from "../components/SolutionPost/DemoSection"
import TestimonialSection from "../components/SolutionPost/TestimonialSection"

const SolutionPost = ({ data }) => {
  const post = data.markdownRemark.frontmatter

  const {
    mainSection,
    firstSection,
    featuredSection,
    featuresSection,
    demoSection,
    testimonialSection,
  } = post

  const getFirstSection = content => {
    const { type } = content[0]

    switch (type) {
      case "growthSection":
        return <GrowthSection {...content[0]} />
      default:
        return null
    }
  }

  return (
    <Layout>
      <MainSection {...mainSection} />
      {getFirstSection(firstSection)}
      <SolutionDescriptionSection {...featuredSection} />
      <FeaturesSection {...featuresSection} />
      <DemoSection {...demoSection} />
      <TestimonialSection testimonialList={testimonialSection} />

      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        demoSection {
          title
          ctaText
          image
        }
        featuredSection {
          featureType
          image
          title
          items
        }
        featuresSection {
          title
          items {
            title
            description
            image
          }
        }
        firstSection {
          type
          summaryType
          title
          description
          image
          items {
            image
            numbers
            description
            text
          }
        }
        mainSection {
          image
          logo
          text
        }
        newsSection {
          title
          news {
            item {
              title
              image
              link
            }
          }
        }
        testimonialSection {
          testimony {
            author
            position
            message
            companyLogo
          }
        }
        title
      }
    }
  }
`

export default SolutionPost
