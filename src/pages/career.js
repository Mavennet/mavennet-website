import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import MainSection from "../components/Career/MainSection"
import TimeLineSection from "../components/Career/TimeLineSection"

const CareerPage = ({ data }) => {
  const post = data.pagesYaml
  const { careerMainSection, careerOurStorySection } = post

  return (
    <Layout>
      <MainSection {...careerMainSection} />
      <TimeLineSection {...careerOurStorySection} />
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
