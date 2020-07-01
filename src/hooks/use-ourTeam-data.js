import { useStaticQuery, graphql } from "gatsby"

export const useOurTeamData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query OurTeamData {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//ourTeam/" } }
          sort: { fields: frontmatter___order }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                image
                name
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
    const { name, title, image } = node.frontmatter

    return {
      id,
      name,
      title,
      image,
    }
  })
}
