import React, { useState, useEffect } from "react"

import Container from "../../base/Container"
import Button from "../../shared/Button"

import { utcStringToFullMonthDate } from "../../../helpers/dateManipulation"

import * as S from "./styles"

const NUM_NEWS_IN_CHUNKS = 3

const NewsSection = ({ news, title }) => {
  const [numNewsVisible, setNumNewsVisible] = useState(NUM_NEWS_IN_CHUNKS)
  const [hasMoreNewsToShow, setHasMoreNewsToShow] = useState(false)

  useEffect(() => {
    if (news.length > NUM_NEWS_IN_CHUNKS + 1) {
      setHasMoreNewsToShow(true)
    }
  }, [news])

  const handleLoadMoreNews = () => {
    const loadableNewsNumber = news.length - 1
    let newNewsNumber = numNewsVisible + NUM_NEWS_IN_CHUNKS

    if (loadableNewsNumber < newNewsNumber) {
      newNewsNumber = loadableNewsNumber
      setHasMoreNewsToShow(false)
    }

    setNumNewsVisible(newNewsNumber)
  }

  const getAnnouncementsList = newsList => {
    const maxCharatersTitle = 60
    if (newsList.length === 0) return null

    const [, ...otherNewsNodes] = newsList
    return (
      <S.AnnouncementsList>
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
        <S.Title>Olha ai{title}</S.Title>
        {getAnnouncementsList(news)}
        {hasMoreNewsToShow && (
          <Button text="Load more articles" onClick={handleLoadMoreNews} />
        )}
      </Container>
    </S.AnnoucementsSection>
  )
}

export default NewsSection
