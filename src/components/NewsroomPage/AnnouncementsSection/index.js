import React, { useState, useEffect } from "react"

import Container from "../../base/Container"

import { utcStringToFullMonthDate } from "../../../helpers/dateManipulation"

import * as S from "./styles"

const NUM_NEWS_IN_CHUNKS = 6

const AnnouncementsSection = ({ announcements, title, ctaText }) => {
  const [numNewsVisible, setNumNewsVisible] = useState(NUM_NEWS_IN_CHUNKS)
  const [hasMoreNewsToShow, setHasMoreNewsToShow] = useState(false)

  useEffect(() => {
    if (announcements.length > NUM_NEWS_IN_CHUNKS + 1) {
      setHasMoreNewsToShow(true)
    }
  }, [announcements])

  const handleLoadMoreNews = () => {
    const loadableNewsNumber = announcements.length - 1
    let newNewsNumber = numNewsVisible + NUM_NEWS_IN_CHUNKS

    if (loadableNewsNumber < newNewsNumber) {
      newNewsNumber = loadableNewsNumber
      setHasMoreNewsToShow(false)
    }

    setNumNewsVisible(newNewsNumber)
  }

  const getAnnouncementsList = announcementsList => {
    const maxCharatersTitle = 60
    if (announcementsList.length === 0) return null

    const [firstNewsNode, ...otherNewsNodes] = announcementsList
    const fistNews = firstNewsNode.node.frontmatter
    return (
      <S.AnnouncementsList>
        <S.AnnouncementItem
          key={fistNews.title}
          first={true}
          data-aos="fade-up"
        >
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
          .slice(0, numNewsVisible)
          .map((newsFrontmatter, index) => {
            const news = newsFrontmatter.node.frontmatter

            return (
              <S.AnnouncementItem
                key={news.title}
                first={false}
                data-aos="fade-up"
                data-aos-delay={100 * (index % 3)}
              >
                <S.AnnouncementCard
                  href={news.link}
                  target="_blank"
                  first={false}
                >
                  <S.Header>
                    <S.Image src={news.image} />
                  </S.Header>
                  <S.Content>
                    <S.CardTitle>{news.title.slice(0, maxCharatersTitle)}{news.title.length > maxCharatersTitle && '...'}</S.CardTitle>
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
        {hasMoreNewsToShow && (
          <S.CTA text="Load More News" onClick={handleLoadMoreNews} />
        )}
      </Container>
    </S.AnnoucementsSection>
  )
}

export default AnnouncementsSection
