import React from "react"
import { graphql } from "gatsby"

const NewsroomPage = ({ data }) => {
  const post = data.pagesYaml

  return <pre>{JSON.stringify(post, null, 2)}</pre>
}

export default NewsroomPage

export const query = graphql`
  query {
    pagesYaml(meta: { title: { eq: "Newsroom" } }) {
      id
      meta {
        title
      }
      newsRoomProfessionalSection {
        title
      }
      newsRoomMediaSection {
        title
        ctaText
      }
      newsRoomMainSection {
        title
        description
        image
        ctaText
      }
      newsRoomAwardsSection {
        title
      }
      newsRoomAnnouncementSection {
        title
        ctaText
      }
    }
  }
`
