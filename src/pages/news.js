import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/NewsroomPage/MainSection"
import AnnouncementsSection from "../components/NewsroomPage/AnnouncementsSection"

import newsRoomImage from "../assets/innovative-blockchain-awards-finalist.jpeg"

const NewsPage = ({ data, location }) => {
  const post = data.pagesYaml
  const { news } = data
  const { meta, newsRoomMainSection } = post

  const [featuredNews, setFeaturedNews] = useState({})

  useEffect(() => {
    setFeaturedNews({
      title: "Mavenet was selected a finalist for the Industry Solutions Award",
      data: "2020-05-29T17:32:01.703Z",
      image: newsRoomImage,
      link: "https://blockchainrevolutionglobal.com/the-eb-awards/",
    })
  }, [])

  return (
    <Layout>
      <SEO title={meta.title} pathname={location.pathname} />
      <MainSection {...newsRoomMainSection} featuredNews={featuredNews} />
      <AnnouncementsSection
        announcements={news.edges}
        // {...newsRoomAnnouncementSection}
      />
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
      newsRoomMainSection {
        title
        ctaText
        featuredAnnoucement
        featuredMedia
        featuredAwards
        featuredProfessionalAssociation
      }
    }
    news: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/site/news/" } }
      sort: { fields: frontmatter___date, order: DESC }
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
