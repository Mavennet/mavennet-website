import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"

import MainSection from "../components/NewsroomPage/MainSection"

const NewsroomPage = ({ data }) => {
  const post = data.pagesYaml

  const { newsRoomMainSection } = post

  const [featuredNews, setFeaturedNews] = useState({})

  useEffect(() => {
    setFeaturedNews({
      title:
        "Mavenet was nominated a finalist for the Industry Solutions Award",
      data: "2020-05-29T17:32:01.703Z",
      image: "/assets/screen-shot-2020-05-29-at-13.28.07.png",
      link: "https://google.com",
    })
  }, [])

  return (
    <Layout>
      <MainSection {...newsRoomMainSection} featuredNews={featuredNews} />
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
