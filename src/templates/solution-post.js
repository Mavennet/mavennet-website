import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import AOS from "aos"
import "aos/dist/aos.css"

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
  useEffect(() => {
    if (typeof window === "undefined") return

    AOS.init({
      offset: 200,
    })
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    AOS.refresh()
  })

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
      {newsSection.news.length > 0 && <NewsSection {...newsSection} />}
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
          demoLink
          image
          backgroundImage
        }
        featuredSection {
          featureType
          image
          title
          description
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
            description
            numbers
            isPercentage
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
