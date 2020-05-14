import React from "react"
import { graphql } from "gatsby"

const IndustryPost = ({ data }) => {
  const post = data.markdownRemark.frontmatter

  return <pre>{JSON.stringify(post, null, 2)}</pre>
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        mainSection {
          industry
          description
          image
          logo
          text
        }
        title
        opportunitySection {
          items {
            item {
              image
              number
              description
            }
          }
          title
        }
        solutionsSection {
          items {
            item {
              image
              title
              description
              ctaText
              slug
            }
          }
          title
        }
        impactSection {
          items {
            item {
              title
              image
              description
            }
          }
          title
        }
        getInTouchSection {
          ctaText
          title
        }
        testimonialSection {
          testimony {
            author
            position
            companyLogo
            message
          }
        }
        newsSection {
          news {
            item {
              title
              link
              image
            }
          }
          title
        }
      }
    }
  }
`

export default IndustryPost
