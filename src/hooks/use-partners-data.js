import { useStaticQuery, graphql } from "gatsby"

export const usePartnersData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PartnersData {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//partners/" } }
          sort: { fields: frontmatter___order }
        ) {
          edges {
            node {
              id
              frontmatter {
                order
                title
                logo
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges.map(item => {
    const { node } = item
    const { id } = node
    const { title, logo, link } = node.frontmatter

    return {
      id,
      title,
      logo,
      link,
    }
  })
}
