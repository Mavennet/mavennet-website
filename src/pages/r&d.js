import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/RandDPage/MainSection"
import ListSection from "../components/RandDPage/ListSection"

const RandDPage = ({ data, location }) => {
  console.log(data)
  const post = data.pagesYaml

  const { rAndDListSection, rAndDMainSection, meta } = post

  return (
    <Layout>
      <SEO title={meta.title} pathname={location.pathname} />
      <MainSection {...rAndDMainSection} />
      <ListSection randdList={rAndDListSection} />
    </Layout>
  )
}

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "R&D" } }) {
      id
      meta {
        title
      }
      rAndDListSection {
        item {
          ctaText
          description
          image
          title
          to
        }
      }
      rAndDMainSection {
        slogan
      }
    }
  }
`

export default RandDPage
