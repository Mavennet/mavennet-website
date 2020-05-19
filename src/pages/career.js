import React from "react"
import { graphql } from "gatsby"

const CareerPage = ({ data }) => {
  const post = data.pagesYaml

  return <pre>{JSON.stringify(post, null, 2)}</pre>
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
