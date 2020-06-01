import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"

import MainSection from "../components/AboutUsPage/MainSection"
import WhoWeAre from "../components/AboutUsPage/WhoWeAre"
import PrinciplesSection from "../components/AboutUsPage/PrinciplesSection"

const AboutPage = ({ data }) => {
  const post = data.pagesYaml

  const { aboutMainSection, aboutSummarySection, aboutPrinciplesSection } = post

  return (
    <Layout>
      <MainSection {...aboutMainSection} />
      <WhoWeAre {...aboutSummarySection} />
      <PrinciplesSection
        principlesList={aboutPrinciplesSection.principlesList}
      />
    </Layout>
  )
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
        subTitle
        description
        ctaText
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
