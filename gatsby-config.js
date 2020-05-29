module.exports = {
  siteMetadata: {
    title: `Mavennet`,
    description: `Mavennet Website`,
    author: `@Mavennet`,
    companyName: `Mavennet System Inc`,
    social: {
      twitter: `Mavennet_`,
      medium: `mavennet`,
      linkedin: `company/mavennet`,
      // angellist: `company/mavennet`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/site/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/site/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `other`,
        path: `${__dirname}/site/other/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/site/news/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mavennet-website`,
        short_name: `mavennet`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/icons/favicon.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
