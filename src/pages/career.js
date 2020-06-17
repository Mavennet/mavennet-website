import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/Career/MainSection"
import TimeLineSection from "../components/Career/TimeLineSection"
import WhoSection from "../components/Career/WhoSection"
import TestimonialSection from "../components/Career/TestimonialSection"
import OpportunitiesSection from "../components/Career/OpportunitiesSection"
import ContactUsSection from "../components/Career/ContactUsSection"

const CareerPage = ({ data, location }) => {
  const post = data.pagesYaml
  const {
    careerMainSection,
    careerOurStorySection,
    careerWhoSection,
    careerDaySection,
    careerOppotunitySection,
    careerOtherOpportunitiesSection,
    meta,
  } = post

  return (
    <Layout>
      <SEO title={meta.title} pathname={location.pathname} />
      <MainSection {...careerMainSection} />
      <TimeLineSection {...careerOurStorySection} />
      <WhoSection {...careerWhoSection} />
      <TestimonialSection {...careerDaySection} />
      <OpportunitiesSection {...careerOppotunitySection} />
      <ContactUsSection {...careerOtherOpportunitiesSection} />
    </Layout>
  )
}

export default CareerPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "Career" } }) {
      id
      meta {
        title
      }
      careerWhoSection {
        title
        reasonsList {
          item {
            description
            image
          }
        }
      }
      careerOurStorySection {
        title
        image
        timeline {
          item {
            year
            description
          }
        }
      }
      careerOtherOpportunitiesSection {
        title
        content
      }
      careerOppotunitySection {
        title
        opportunitiesList {
          item {
            date
            title
            location
          }
        }
      }
      careerMainSection {
        image
        title
        description
        ctaText
      }
      careerDaySection {
        title
        testimonialsList {
          item {
            name
            position
            testimony
            image
          }
        }
      }
    }
  }
`
