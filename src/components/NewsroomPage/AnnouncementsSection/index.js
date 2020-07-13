import React, { useState } from "react"

import Container from "../../base/Container"
import NewsCard from "../../shared/NewsCard"

import { utcStringToFullMonthDate } from "../../../helpers/dateManipulation"

import * as S from "./styles"

const AnnouncementsSection = ({ announcements, title, ctaText }) => {
  const NUM_NEWS_IN_CHUNKS = 6

  const [numChunksVisible, setNumChunksVisible] = useState(1)

  const getAnnouncementsList = announcementsList => {
    if (announcementsList.length === 0) return null

    const [firstNewsNode, ...otherNewsNodes] = announcementsList
    const fistNews = firstNewsNode.node.frontmatter
    return (
      <S.AnnouncementsList>
        <S.AnnouncementItem key={fistNews.title} first={true}>
          <S.AnnouncementCard href={fistNews.link} target="_blank" first={true}>
            <S.Header>
              <S.Image src={fistNews.image} />
            </S.Header>
            <S.Content>
              <S.CardTitle>{fistNews.title}</S.CardTitle>
              <S.CardDate>{utcStringToFullMonthDate(fistNews.date)}</S.CardDate>
            </S.Content>
          </S.AnnouncementCard>
        </S.AnnouncementItem>

        {otherNewsNodes
          .slice(0, NUM_NEWS_IN_CHUNKS * numChunksVisible)
          .map(newsFrontmatter => {
            const news = newsFrontmatter.node.frontmatter

            return (
              <S.AnnouncementItem key={news.title} first={false}>
                <S.AnnouncementCard
                  href={news.link}
                  target="_blank"
                  first={false}
                >
                  <S.Header>
                    <S.Image src={news.image} />
                  </S.Header>
                  <S.Content>
                    <S.CardTitle>{news.title}</S.CardTitle>
                    <S.CardDate>
                      {utcStringToFullMonthDate(news.date)}
                    </S.CardDate>
                  </S.Content>
                </S.AnnouncementCard>
              </S.AnnouncementItem>
            )
          })}
      </S.AnnouncementsList>
    )
  }

  return (
    <S.AnnoucementsSection>
      <Container>
        <S.Title>{title}</S.Title>
        {getAnnouncementsList(announcements)}
        {/* <S.CTA text={ctaText} to="/" /> */}
      </Container>
    </S.AnnoucementsSection>
  )
}

export default AnnouncementsSection
