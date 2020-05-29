import React, { useState, useEffect, useRef } from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"

import MainSection from "../components/NewsroomPage/MainSection"
import NavigationMenu from "../components/NewsroomPage/NavigationMenu"

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 90)

const NewsroomPage = ({ data }) => {
  const post = data.pagesYaml

  const { newsRoomMainSection } = post

  const [featuredNews, setFeaturedNews] = useState({})
  const announcementRef = useRef(null)
  const mediaRef = useRef(null)
  const awardsRef = useRef(null)
  const professionalAssociationRef = useRef(null)

  const menuItems = [
    {
      text: "Announcements",
      reference: announcementRef,
    },
    {
      text: "Media",
      reference: mediaRef,
    },
    {
      text: "Awards",
      reference: awardsRef,
    },
    {
      text: "Professional Association",
      reference: professionalAssociationRef,
    },
  ]

  useEffect(() => {
    setFeaturedNews({
      title:
        "Mavenet was nominated a finalist for the Industry Solutions Award",
      data: "2020-05-29T17:32:01.703Z",
      image: "/assets/screen-shot-2020-05-29-at-13.28.07.png",
      link: "https://google.com",
    })
  }, [])

  const executeScroll = ref => scrollToRef(ref)

  return (
    <Layout>
      <MainSection {...newsRoomMainSection} featuredNews={featuredNews} />
      <NavigationMenu scrollTo={executeScroll} menuItems={menuItems} />
      <div ref={announcementRef} style={{ height: "100vh" }}>
        Hello from announcements
      </div>
      <div ref={mediaRef} style={{ height: "100vh" }}>
        Hello from Media
      </div>
      <div ref={awardsRef} style={{ height: "100vh" }}>
        Hello from Awards
      </div>
      <div ref={professionalAssociationRef} style={{ height: "100vh" }}>
        Hello from Professional Association
      </div>
    </Layout>
  )
}

export default NewsroomPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "Newsroom" } }) {
      id
      meta {
        title
      }
      newsRoomProfessionalSection {
        title
      }
      newsRoomMediaSection {
        title
        ctaText
      }
      newsRoomMainSection {
        title
        ctaText
        featuredAnnoucement
        featuredMedia
        featuredAwards
        featuredProfessionalAssociation
      }
      newsRoomAwardsSection {
        title
      }
      newsRoomAnnouncementSection {
        title
        ctaText
      }
    }
  }
`
