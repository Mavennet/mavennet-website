import React from "react"
import { graphql } from "gatsby"

import MainSection from "../components/AboutUsPage/MainSection"

const AboutPage = ({ data }) => {
  const post = data.pagesYaml

  return <MainSection />
}

export default AboutPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "About" } }) {
      id
      aboutAwardsSection {
        awardsList {
          item {
            title
            image
            link
          }
        }
      }
      aboutLearnSection {
        linksList {
          item {
            ctaText
            description
            link
          }
        }
      }
      aboutMainSection {
        title
        description
      }
      aboutPartnersSection {
        partnersList {
          item {
            name
            link
            logo
          }
        }
      }
      aboutPrinciplesSection {
        principlesList {
          item {
            title
            description
            image
          }
        }
      }
      aboutSummarySection {
        title
        description
      }
      aboutTeamSection {
        teamList {
          item {
            name
            position
            image
            link
          }
        }
      }
      meta {
        title
      }
    }
  }
`
