import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../Header/Header"
import Footer from "../Footer"
import ContactUsFooter from "../ContactUsFooter"

import GlobalStyle from "../../../styles/globalStyle"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query HeaderFooterQuery {
      solutions: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/^/solutions/.*$/" } } }
      ) {
        nodes {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
      industries: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/^/industries/.*$/" } } }
      ) {
        nodes {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
      metaData: site {
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
  `)

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Header menuItems={{ ...data }} />
      {children}
      <ContactUsFooter />
      <Footer menuItems={{ ...data }} />
    </>
  )
}
