import React, { useState, useEffect, useRef } from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"

import MainSection from "../components/NewsroomPage/MainSection"
import NavigationMenu from "../components/NewsroomPage/NavigationMenu"
import AnnouncementsSection from "../components/NewsroomPage/AnnouncementsSection"
import MediaSection from "../components/NewsroomPage/MediaSection"
import AwardsSection from "../components/NewsroomPage/AwardsSection"
import NewsSection from "../components/shared/NewsSection"

const scrollToRef = ref =>
  window.scrollTo({
    left: 0,
    top: ref.current.offsetTop - 90,
    behavior: "smooth",
  })

const NewsroomPage = ({ data }) => {
  const post = data.pagesYaml
  const { announcements, media, awards, professionalAssociation } = data
  const {
    newsRoomMainSection,
    newsRoomAnnouncementSection,
    newsRoomMediaSection,
    newsRoomAwardsSection,
    newsRoomProfessionalSection,
  } = post

  const [featuredNews, setFeaturedNews] = useState({})
  const [professionalValues, setProfessionalValues] = useState({})

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
    configProfessionalValues(professionalAssociation)
    setFeaturedNews({
      title:
        "Mavenet was nominated a finalist for the Industry Solutions Award",
      data: "2020-05-29T17:32:01.703Z",
      image: "/assets/screen-shot-2020-05-29-at-13.28.07.png",
      link: "https://google.com",
    })
  }, [professionalAssociation])

  const configProfessionalValues = professionalList => {
    const { edges } = professionalList

    const professionalObj = {
      news: edges.map(({ node }) => ({ item: { ...node.frontmatter } })),
    }

    setProfessionalValues(professionalObj)
  }

  const executeScroll = ref => scrollToRef(ref)

  return (
    <Layout>
      <MainSection {...newsRoomMainSection} featuredNews={featuredNews} />
      <NavigationMenu scrollTo={executeScroll} menuItems={menuItems} />
      <AnnouncementsSection
        ref={announcementRef}
        announcements={announcements.edges}
        {...newsRoomAnnouncementSection}
      />
      <MediaSection ref={mediaRef} media={media} {...newsRoomMediaSection} />
      <AwardsSection
        ref={awardsRef}
        awards={awards.edges}
        {...newsRoomAwardsSection}
      />
      <NewsSection
        ref={professionalAssociationRef}
        {...newsRoomProfessionalSection}
        {...professionalValues}
        noBorder={true}
      />
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
    announcements: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//announcements/" } }
      limit: 4
    ) {
      edges {
        node {
          id
          frontmatter {
            image
            title
            date
            link
          }
        }
      }
    }

    media: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//media/" } }
      limit: 5
    ) {
      edges {
        node {
          id
          frontmatter {
            image
            title
            date
            link
          }
        }
      }
    }

    awards: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//awards/" } }
      sort: { fields: frontmatter___date }
      limit: 4
    ) {
      edges {
        node {
          id
          frontmatter {
            image
            title
            date
          }
        }
      }
    }

    professionalAssociation: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//professionalAssociation/" } }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            image
            title
            date
            link
          }
        }
      }
    }
  }
`
