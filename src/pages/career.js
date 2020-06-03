import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import MainSection from "../components/Career/MainSection"
import TimeLineSection from "../components/Career/TimeLineSection"
import WhoSection from "../components/Career/WhoSection"
import TestimonialSection from "../components/Career/TestimonialSection"

const CareerPage = ({ data }) => {
  const post = data.pagesYaml
  const {
    careerMainSection,
    careerOurStorySection,
    careerWhoSection,
    careerDaySection,
  } = post

  return (
    <Layout>
      <MainSection {...careerMainSection} />
      <TimeLineSection {...careerOurStorySection} />
      <WhoSection {...careerWhoSection} />
      <TestimonialSection {...careerDaySection} />
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
