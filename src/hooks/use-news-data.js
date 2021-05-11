import { useStaticQuery, graphql } from "gatsby"

export const useNewsData = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query NewsData {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/site/news/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              image
              title
              description
              date
              link
            }
          }
        }
      }
    }
  `)

  return allMarkdownRemark.edges.map(item => {
    const { node } = item
    const { id } = node
    const { title, image, date, link, description } = node.frontmatter

    return {
      id,
      title,
      image,
      date,
      link,
      description
    }
  })
}
