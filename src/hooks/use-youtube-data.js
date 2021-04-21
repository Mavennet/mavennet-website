import { useStaticQuery, graphql } from "gatsby"

export const useYoutubeData = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query YoutubeData {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/site/youtube/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              url
            }
          }
        }
      }
    }
  `)

  return allMarkdownRemark.edges.map(item => {
    const { node } = item
    const { id } = node
    const { title, url } = node.frontmatter

    return {
      id,
      title,
      url
    }
  })
}
