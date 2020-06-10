import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"
import MainSection from "../components/RandDPage/MainSection"
import ListSection from "../components/RandDPage/ListSection"

const RandDPage = ({ data }) => {
  const post = data.pagesYaml

  const { rAndDListSection, rAndDMainSection } = post

  return (
    <Layout>
      <MainSection {...rAndDMainSection} />
      <ListSection randdList={rAndDListSection} />
    </Layout>
  )
}

export default RandDPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "R&D" } }) {
      id
      rAndDListSection {
        item {
          ctaText
          description
          image
          pointsList
          title
        }
      }
      rAndDMainSection {
        slogan
      }
    }
  }
`
