const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//content/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let component,
        slug = node.fields.slug

      // TODO: Find a smarter way to do this...
      if (slug.match(/^\/solutions\/.*$/)) {
        component = path.resolve(`./src/templates/solution-post.js`)
      }

      createPage({
        path: slug,
        component,
        context: {
          slug: slug,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemarkFrontmatterFirstSection implements Node {
      summaryType: String
      title: String
      description: String
      image: String
      items: [Item]
      itemsText: [String]
    }

    type Item implements Node {
      text: String
      image: String
      numbers: String
      description: String
      isPercentage: Boolean
    }

    type MarkdownRemarkFrontmatterFeaturedSection implements Node {
      description: String
    }

    type MarkdownRemarkFrontmatterFirstSectionItems implements Node {
      text: String
      image: String
      numbers: String
      description: String
    }

    type MarkdownRemarkFrontmatterDemoSection implements Node {
      backgroundImage: String
      textOnly: Boolean
      demoLink: String
    }

    type PagesYamlNewsRoomMainSection implements Node {
      featuredAnnoucement: String
      featuredMedia: String
      featuredAwards: String
      featuredProfessionalAssociation: String
    }

    type PagesYamlHomePartnersSection implements Node {
      ctaText: String
    }

    type MarkdownRemarkFrontmatter implements Node {
      description: String
    }
  `
  createTypes(typeDefs)
}
