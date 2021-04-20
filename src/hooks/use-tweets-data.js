import { useStaticQuery, graphql } from "gatsby"

export const useTweetsData = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query TweetsData {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/site/tweets/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              html
            }
          }
        }
      }
    }
  `)

  return allMarkdownRemark.edges.map(item => {
    const { node } = item
    const { id } = node
    const { title, html } = node.frontmatter

    return {
      id,
      title,
      html
    }
  })
}
