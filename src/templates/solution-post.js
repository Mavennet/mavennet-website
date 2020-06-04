import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"

import MainSection from "../components/SolutionPost/MainSection"
import GrowthSection from "../components/SolutionPost/GrowthSection"
import SummarySection from "../components/SolutionPost/SummarySection"
import SolutionDescriptionSection from "../components/SolutionPost/SolutionDescriptionSection"
import FeaturesSection from "../components/SolutionPost/FeaturesSection"
import DemoSection from "../components/SolutionPost/DemoSection"
import DemoSectionBg from "../components/SolutionPost/DemoSectionBg"
import TestimonialSection from "../components/shared/TestimonialSection"
import NewsSection from "../components/shared/NewsSection"

const SolutionPost = ({ data }) => {
  const post = data.markdownRemark.frontmatter

  const {
    mainSection,
    firstSection,
    featuredSection,
    featuresSection,
    demoSection,
    testimonialSection,
    newsSection,
  } = post

  const getFirstSection = content => {
    const { type } = content[0]

    switch (type) {
      case "growthSection":
        return <GrowthSection {...content[0]} />
      case "summarySection":
        return <SummarySection {...content[0]} />
      default:
        return null
    }
  }

  const getDemoSection = demoSection => {
    if (!demoSection.backgroundImage) {
      return <DemoSection {...demoSection} />
    }

    return <DemoSectionBg {...demoSection} />
  }

  return (
    <Layout>
      <MainSection {...mainSection} />
      {getFirstSection(firstSection)}
      {featuredSection && <SolutionDescriptionSection {...featuredSection} />}
      <FeaturesSection {...featuresSection} />
      {getDemoSection(demoSection)}
      <TestimonialSection testimonialList={testimonialSection} />
      <NewsSection {...newsSection} />

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
          backgroundImage
        }
        featuredSection {
          featureType
          image
          title
          items
        }
        featuresSection {
          title
          featuresType
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
          itemsText
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
