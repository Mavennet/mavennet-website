import React, { useRef, useEffect } from "react"
import { graphql } from "gatsby"

import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/Career/MainSection"
import PrinciplesSection from "../components/Career/PrinciplesSection"
import WhoSection from "../components/Career/WhoSection"
import TestimonialSection from "../components/Career/TestimonialSection"
import OpportunitiesSection from "../components/Career/OpportunitiesSection"
import ContactUsSection from "../components/Career/ContactUsSection"

const scrollToRef = ref =>
  window.scrollTo({
    left: 0,
    top: ref.current.offsetTop - 90,
    behavior: "smooth",
  })

const CareerPage = ({ data, location }) => {
  const post = data.pagesYaml
  const {
    careerMainSection,
    careerPrinciplesSection,
    careerWhoSection,
    careerDaySection,
    careerOppotunitySection,
    careerOtherOpportunitiesSection,
    meta,
  } = post

  const openPositionsRef = useRef(null)
  const executeScroll = ref => scrollToRef(ref)

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

  return (
    <Layout>
      <SEO title={meta.title} pathname={location.pathname} />
      <MainSection
        {...careerMainSection}
        handlePositionClick={() => executeScroll(openPositionsRef)}
      />
      <PrinciplesSection
        principlesList={careerPrinciplesSection.principlesList}
      />
      <WhoSection {...careerWhoSection} />
      <TestimonialSection {...careerDaySection} />
      <OpportunitiesSection
        {...careerOppotunitySection}
        ref={openPositionsRef}
      />
      <ContactUsSection {...careerOtherOpportunitiesSection} />
    </Layout>
  )
}

export default CareerPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "Careers" } }) {
      id
      meta {
        title
      }
      careerWhoSection {
        title
        subtitle
        reasonsList {
          item {
            description
            image
          }
        }
      }
      careerOtherOpportunitiesSection {
        title
        content
      }
      careerOppotunitySection {
        title
        noOpportunitiesText
        opportunitiesList {
          item {
            date
            title
            location
            link
          }
        }
      }
      careerMainSection {
        image
        title
        description
        ctaText
      }
      careerPrinciplesSection {
        principlesList {
          item {
            title
            description
            image
          }
        }
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
