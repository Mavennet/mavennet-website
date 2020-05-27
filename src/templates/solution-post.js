import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/base/Layout"

import MainSection from "../components/SolutionPost/MainSection"

const SolutionPost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  const { mainSection } = post

  return (
    <Layout>
      <MainSection {...mainSection} />
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        demoSection {
          title
          ctaText
          image
        }
        featuredSection {
          featureType
          image
          title
          items
        }
        featuresSection {
          title
          items {
            title
            description
            image
          }
        }
        firstSection {
          type
          summaryType
          title
          description
          image
          items {
            image
            numbers
            description
            text
          }
        }
        mainSection {
          image
          logo
          text
        }
        newsSection {
          title
          news {
            item {
              title
              image
              link
            }
          }
        }
        testimonialSection {
          testimony {
            author
            position
            message
            companyLogo
          }
        }
        title
      }
    }
  }
`

export default SolutionPost
