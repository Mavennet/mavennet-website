import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"

import MainSection from "../components/ContactUsPage/MainSection"
import FormSection from "../components/ContactUsPage/FormSection"

const ContactUsPage = ({ data }) => {
  const meta = data.site.siteMetadata
  return (
    <Layout>
      <MainSection meta={meta} />
      <FormSection />
    </Layout>
  )
}

export default ContactUsPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        companyName
        social {
          twitter
          medium
          linkedin
        }
      }
    }
  }
`
