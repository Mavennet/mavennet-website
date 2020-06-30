import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/AboutUsPage/MainSection"
import WhoWeAre from "../components/AboutUsPage/WhoWeAre"
import PrinciplesSection from "../components/AboutUsPage/PrinciplesSection"
import PartnersSection from "../components/shared/GenericPartnersSection"
import AwardsSection from "../components/AboutUsPage/AwardsSection"
import OurTeamSection from "../components/AboutUsPage/OurTeamSection"
import LearnMoreSection from "../components/AboutUsPage/LearnMoreSection"

import { usePartnersData } from "../hooks/use-partners-data"
import { useOurTeamData } from "../hooks/use-ourTeam-data"

const AboutPage = ({ data, location }) => {
  const post = data.pagesYaml
  const partnersData = usePartnersData()
  const teamData = useOurTeamData()

  const {
    aboutMainSection,
    aboutSummarySection,
    aboutPrinciplesSection,
    aboutPartnersSection,
    aboutAwardsSection,
    aboutTeamSection,
    aboutLearnSection,
    meta,
  } = post

  return (
    <Layout>
      <SEO title={meta.title} pathname={location.pathname} />
      <MainSection {...aboutMainSection} />
      <WhoWeAre {...aboutSummarySection} />
      <PrinciplesSection
        principlesList={aboutPrinciplesSection.principlesList}
      />
      <PartnersSection {...aboutPartnersSection} partners={partnersData} />
      <AwardsSection {...aboutAwardsSection} />
      <OurTeamSection {...aboutTeamSection} team={teamData} />
      <LearnMoreSection {...aboutLearnSection} />
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "About" } }) {
      id
      aboutAwardsSection {
        title
        awardsList
      }
      aboutLearnSection {
        title
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
