import { useStaticQuery, graphql } from "gatsby"

export const usePartnersData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SiteMetaData {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//other/" } }) {
          edges {
            node {
              id
              frontmatter {
                title
                logo
                link
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
