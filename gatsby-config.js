module.exports = {
  siteMetadata: {
    title: `Mavennet`,
    description: `Mavennet Website`,
    author: `@Mavennet`,
    siteUrl: `https://www.mavennet.com`,
    companyName: `Mavennet System Inc`,
    // siteVerification: {
    //   google: ...,
    //   bing: ...
    // },
    social: {
      twitter: `mavennet_`,
      medium: `mavennet`,
      linkedin: `company/mavennet`,
      // angellist: `company/mavennet`,
    },
    socialLinks: {
      twitter: `https://www.twitter.com/mavennet_`,
      medium: `https://www.medium.com/mavennet`,
      linkedin: `https://www.linkedin.com/company/mavennet`,
      angelList: `https://www.angel.co/company/mavennet`,
    },
    keywords: [
      "blockchain technology",
      "supply chain solutions",
      "timestamping",
      "mavennet aion",
      // Add more keywords later
    ],
    organization: {
      name: `Mavennet`,
      url: `https://www.mavennet.com`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-171752582-1`,
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/site/company/`,
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
        icon: `src/assets/icons/favicon-32.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
