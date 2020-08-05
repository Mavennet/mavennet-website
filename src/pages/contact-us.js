import React from "react"
import { graphql } from "gatsby"
import queryString from "query-string"

import Layout from "../components/base/Layout"
import SEO from "../components/base/SEO"

import MainSection from "../components/ContactUsPage/MainSection"
import FormSection from "../components/ContactUsPage/FormSection"

const ContactUsPage = ({ data, location }) => {
  const meta = data.site.siteMetadata
  const query = queryString.parse(location.search).q;

  return (
    <Layout>
      <SEO title="Get in touch with us" pathname={location.pathname} />
      <MainSection meta={meta} />
      <FormSection query={query} />
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
