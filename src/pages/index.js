import React, { useEffect, useRef } from "react"
import { graphql } from "gatsby"

import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/HomePage/MainSection"
import ServiceSection from "../components/HomePage/ServiceSection"
import SolutionsSection from "../components/HomePage/SolutionsSection"
import PartnersSection from "../components/shared/GenericPartnersSection"
import AwardsSection from "../components/shared/AwardsSection"
import RAndDSection from "../components/HomePage/RAndDSection"
import SloganSection from "../components/HomePage/SloganSection/SloganSection"

import { usePartnersData } from "../hooks/use-partners-data"

const scrollToRef = ref => 
  window.scrollTo({
    left: 0,
    top: ref.current.offsetTop - 87,
    behavior: 'smooth'
  })


const IndexPage = ({ data, location }) => {
  const solutionsSectionRef = useRef(null)
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

  const post = data.pagesYaml
  const partnersData = usePartnersData()

  const {
    meta,
    homeMainSection,
    homeServiceSection,
    homeSolutionsSection,
    homePartnersSection,
    homeRandDSection,
  } = post

  return (
    <Layout>
      <SEO title={meta.title} pathname={location.pathname} />
      <MainSection 
        handleScrollToServiceSection={() => executeScroll(solutionsSectionRef)}/>
      <SolutionsSection {...homeSolutionsSection} ref={solutionsSectionRef}/>
      <ServiceSection {...homeServiceSection} />
      <RAndDSection {...homeRandDSection} />
      <AwardsSection title="Awards and Recognition" />
      <PartnersSection {...homePartnersSection} partners={partnersData} />
      <SloganSection {...homeMainSection} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "Home" } }) {
      title
      meta {
        title
      }
      homeMainSection {
        ctaText
        slogan
        subtitle
      }
      homeSolutionsSection {
        title
        subtitle
        solutionList {
          item {
            title
            media
            logo
            description
            slug
            ctaText
          }
        }
      }
      homeServiceSection {
        title
        description
        ctaText
        steps {
          item {
            image
            title
            description
          }
        }
      }
      homeRandDSection {
        title
        subtitle
        rAndDList {
          item {
            title
            description
            image
          }
        }
      }
      homePartnersSection {
        title
        ctaText
      }
      homeNewsSection {
        title
        ctaText
        news {
          item {
            title
            image
            link
          }
        }
      }
    }
  }
`
