import React from "react"
import { graphql } from "gatsby"

const SolutionPost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  console.log(post)

  return (
    <>
      <h1>{post.title}</h1>
    </>
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
          news {
            title
            image
            link
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
