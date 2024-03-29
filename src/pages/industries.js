import React, { useEffect } from "react"
import { graphql } from "gatsby"

import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"
import MainSection from "../components/IndustriesPage/MainSection"
import IndustriesSection from "../components/IndustriesPage/IndustriesSection"

const IndustriesPage = ({ data, location }) => {
  const post = data.pagesYaml
  const { title, subtitle, industries, meta } = post

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
      <MainSection title={title} subtitle={subtitle} />
      <IndustriesSection industries={industries} />
    </Layout>
  )
}

export default IndustriesPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "Industries" } }) {
      title
      meta {
        title
      }
      subtitle
      industries {
        title
        description
        ctaText
        image
        companies {
          title
          logo
        }
      }
    }
  }
`
