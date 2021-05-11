import React, { useState, useEffect } from "react"

import Container from "../../base/Container"
import Button from "../../shared/Button"

import { useNewsData } from "../../../hooks/use-news-data"

import * as S from "./styles"

const NUM_NEWS_IN_CHUNKS = 3

const NewsSection = ({ title }) => {
  const [numNewsVisible, setNumNewsVisible] = useState(NUM_NEWS_IN_CHUNKS)
  const [hasMoreNewsToShow, setHasMoreNewsToShow] = useState(false)

  const newsData = useNewsData()

  useEffect(() => {
    if (newsData.length > NUM_NEWS_IN_CHUNKS + 1) {
      setHasMoreNewsToShow(true)
    }
  }, [newsData])

  const handleLoadMoreNews = () => {
    const loadableNewsNumber = newsData.length - 1
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

    return (
      <S.AnnouncementsList>
        <S.AnnouncementListContainer>
          {newsList
            .slice(0, numNewsVisible)
            .map((news, index) => {
              const { link, title, image, description } = news

              return (
                  <S.AnnouncementCard
                    href={link}
                    target="_blank"
                    key={title}
                    data-aos="fade-up"
                    data-aos-delay={100 * (index % 3)}
                  >
                    <S.Header>
                      <S.Image src={image} />
                    </S.Header>
                    <S.Content>
                      <S.CardTitle>{title.slice(0, maxCharatersTitle)}{title.length > maxCharatersTitle && '...'}</S.CardTitle>
                      { description && <S.CardText>{description}</S.CardText> }
                      <S.LinkCTA text="Read more" link={link}/>
                    </S.Content>
                  </S.AnnouncementCard>
              )
            })}
        </S.AnnouncementListContainer>
      </S.AnnouncementsList>
    )
  }

  return (
    <S.AnnoucementsSection>
      <Container>
        <S.Title>News and media</S.Title>
      </Container>
        {getAnnouncementsList(newsData)}
      <Container style={{ marginTop: '60px'}}>
        {hasMoreNewsToShow && (
          <Button type="button" text="Load more articles" onClick={handleLoadMoreNews} />
        )}
      </Container>
    </S.AnnoucementsSection>
  )
}

export default NewsSection
