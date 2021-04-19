import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import NewsSection from "../components/NewsroomPage/NewsSection"
import TwitterSection from "../components/NewsroomPage/TwitterSection"


const NewsPage = ({ data, location }) => {
  const post = data.pagesYaml
  const { news } = data
  const { meta } = post

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
    <Layout headerTheme="sticky">
      <SEO title={meta.title} pathname={location.pathname} />
      <NewsSection
        news={news.edges}
      />
      <TwitterSection />
    </Layout>
  )
}

export default NewsPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "News & Media" } }) {
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
