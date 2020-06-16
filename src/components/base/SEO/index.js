import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { StaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, image, title, pathname }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={({ site }) => {
        const metaDescription = description || site.siteMetadata.description
        const metaImage =
          image && image.src ? `${site.siteMetadata.siteUrl}${image.src}` : null
        const metaUrl = `${site.siteMetadata.siteUrl}${pathname}`
        const metaKeywords = site.siteMetadata.keywords || keywords
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            link={[{ rel: "canonical", href: metaUrl }]}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                name: `keywords`,
                content: metaKeywords.join(", "),
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:creator`,
                content: `@${site.siteMetadata.social.twitter}`,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              // {
              //   name: `google-site-verification`,
              //   content: /* .... */
              // }
            ]
              .concat(
                image
                  ? [
                      {
                        property: `og:image`,
                        content: metaImage,
                      },
                      {
                        property: `og:image:alt`,
                        content: image.alt,
                      },
                      {
                        property: `twitter:image:alt`,
                        content: image.alt,
                      },
                      {
                        property: `og:image:width`,
                        content: image.width,
                      },
                      {
                        property: `og:image:height`,
                        content: image.height,
                      },
                      {
                        name: `twitter:card`,
                        content: `summary_large_image`,
                      },
                    ]
                  : [
                      {
                        name: `twitter:card`,
                        content: `summary`,
                      },
                    ]
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  keywords: [],
  pathname: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.object,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  pathname: PropTypes.string,
  title: PropTypes.string.isRequired,
}

const detailsQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        keywords
        social {
          twitter
        }
      }
    }
  }
`

export default SEO
