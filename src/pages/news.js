import React, { useState, useEffect, useRef } from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/NewsroomPage/MainSection"
import NavigationMenu from "../components/NewsroomPage/NavigationMenu"
import AnnouncementsSection from "../components/NewsroomPage/AnnouncementsSection"
import MediaSection from "../components/NewsroomPage/MediaSection"
import AwardsSection from "../components/NewsroomPage/AwardsSection"

import newsRoomImage from "../assets/innovative-blockchain-awards-finalist.jpeg"

const scrollToRef = ref =>
  window.scrollTo({
    left: 0,
    top: ref.current.offsetTop - 90,
    behavior: "smooth",
  })

const NewsPage = ({ data, location }) => {
  const post = data.pagesYaml
  const { announcements, media, awards, professionalAssociation } = data
  const {
    meta,
    newsRoomMainSection,
    newsRoomAnnouncementSection,
    newsRoomMediaSection,
    newsRoomAwardsSection,
  } = post

  const [featuredNews, setFeaturedNews] = useState({})
  const [, setProfessionalValues] = useState({})

  const announcementRef = useRef(null)
  const mediaRef = useRef(null)
  const awardsRef = useRef(null)

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
  ]

  useEffect(() => {
    configProfessionalValues(professionalAssociation)
    setFeaturedNews({
      title: "Mavenet was selected a finalist for the Industry Solutions Award",
      data: "2020-05-29T17:32:01.703Z",
      image: newsRoomImage,
      link: "https://blockchainrevolutionglobal.com/the-eb-awards/",
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
      <SEO title={meta.title} pathname={location.pathname} />
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
      {/* <NewsSection
        ref={professionalAssociationRef}
        {...newsRoomProfessionalSection}
        {...professionalValues}
        noBorder={true}
      /> */}
    </Layout>
  )
}

export default NewsPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "News" } }) {
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
      sort: { fields: frontmatter___order }
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
      sort: { fields: frontmatter___date }
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
      filter: { fileAbsolutePath: { regex: "//awardsNews/" } }
      sort: { fields: frontmatter___order }
      limit: 5
    ) {
      edges {
        node {
          id
          frontmatter {
            image
            title
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
