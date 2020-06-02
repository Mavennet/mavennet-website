import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"

import MainSection from "../components/AboutUsPage/MainSection"
import WhoWeAre from "../components/AboutUsPage/WhoWeAre"
import PrinciplesSection from "../components/AboutUsPage/PrinciplesSection"
import PartnersSection from "../components/shared/PartnersSection"
import OurTeamSection from "../components/AboutUsPage/OurTeamSection"

import { usePartnersData } from "../hooks/use-partners-data"
import { useOurTeamData } from "../hooks/use-ourTeam-data"

const AboutPage = ({ data }) => {
  const post = data.pagesYaml
  const partnersData = usePartnersData()
  const teamData = useOurTeamData()

  const {
    aboutMainSection,
    aboutSummarySection,
    aboutPrinciplesSection,
    aboutPartnersSection,
    aboutTeamSection,
  } = post

  return (
    <Layout>
      <MainSection {...aboutMainSection} />
      <WhoWeAre {...aboutSummarySection} />
      <PrinciplesSection
        principlesList={aboutPrinciplesSection.principlesList}
      />
      <PartnersSection {...aboutPartnersSection} partners={partnersData} />
      <OurTeamSection {...aboutTeamSection} team={teamData} />
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
        title
        ctaText
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
        title
        ctaText
      }
      meta {
        title
      }
    }
  }
`
