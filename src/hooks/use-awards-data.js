import { useStaticQuery, graphql } from "gatsby"

export const useAwardsData = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query AwardsData {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//awards//" } }
        sort: { fields: frontmatter___order }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              logo
            }
          }
        }
      }
    }
  `)

  return allMarkdownRemark.edges.map(item => {
    const { node } = item
    const { id } = node
    const { title, logo } = node.frontmatter

    return {
      id,
      title,
      logo,
    }
  })
}
