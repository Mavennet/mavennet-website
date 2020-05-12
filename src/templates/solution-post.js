import React from "react"
import { graphql } from "gatsby"

const SolutionPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <h1>{post.frontmatter.title}</h1>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`

export default SolutionPost
