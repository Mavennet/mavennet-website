import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import StoreProvider, { StoreContext } from "../../../utils/store"

import Header from "../Header/Header"
import Footer from "../Footer"
import ContactUsFooter from "../ContactUsFooter"

import GlobalStyle from "../../../styles/globalStyle"

export default function Layout({
  children,
  footerHidden,
  contactUsHidden,
  fillFooter,
}) {
  const data = useStaticQuery(graphql`
    query HeaderFooterQuery {
      solutions: allMarkdownRemark(
        filter: {
          fields: { slug: { regex: "/^/solutions/.*$/" } }
          frontmatter: { previousWork: { eq: false } }
        }
        sort: { fields: frontmatter___order }
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
    <StoreProvider>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <StoreContext.Consumer>
        {value => {
          const { drawerMenu } = value
          const isDrawerMenuOpen = drawerMenu[0]
          return <GlobalStyle isHtmlOverflowVisible={!isDrawerMenuOpen} />
        }}
      </StoreContext.Consumer>
      <Header menuItems={{ ...data }} />
      {children}
      {!footerHidden && (
        <>
          {!contactUsHidden && <ContactUsFooter fillFooter={fillFooter} />}
          <Footer menuItems={{ ...data }} />
        </>
      )}
    </StoreProvider>
  )
}
