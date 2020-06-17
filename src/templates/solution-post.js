import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/SolutionPost/MainSection"
import GrowthSection from "../components/SolutionPost/GrowthSection"
import SummarySection from "../components/SolutionPost/SummarySection"
import SolutionDescriptionSection from "../components/SolutionPost/SolutionDescriptionSection"
import HowItWorksSection from "../components/SolutionPost/HowItWorksSection"
import FeaturesSection from "../components/SolutionPost/FeaturesSection"
import DemoSection from "../components/SolutionPost/DemoSection"
import DemoSectionBg from "../components/SolutionPost/DemoSectionBg"
import TestimonialSection from "../components/shared/TestimonialSection"
import NewsSection from "../components/shared/NewsSection"

const SolutionPost = ({ data }) => {
  const post = data.markdownRemark.frontmatter

  const {
    title,
    mainSection,
    firstSection,
    featuredSection,
    howItWorksSection,
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
      <SEO title={title} />
      <MainSection {...mainSection} />
      {getFirstSection(firstSection)}
      {featuredSection && <SolutionDescriptionSection {...featuredSection} />}
      {howItWorksSection && <HowItWorksSection {...howItWorksSection} />}
      <FeaturesSection {...featuresSection} />
      {getDemoSection(demoSection)}
      {testimonialSection && (
        <TestimonialSection testimonialList={testimonialSection} />
      )}
      <NewsSection {...newsSection} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        demoSection {
          title
          textOnly
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
        howItWorksSection {
          title
          howItWorksItems {
            image
            title
            description
          }
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
