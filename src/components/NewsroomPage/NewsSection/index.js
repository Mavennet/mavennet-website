import React, { useState, useEffect } from "react"

import Container from "../../base/Container"
import Button from "../../shared/Button"

import { Helmet } from "react-helmet"

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
        <S.AnnouncementListContainer>
          {otherNewsNodes
            .slice(0, numNewsVisible)
            .map((newsFrontmatter, index) => {
              const news = newsFrontmatter.node.frontmatter

              return (
                  <S.AnnouncementCard
                    href={news.link}
                    target="_blank"
                    key={news.title}
                    data-aos="fade-up"
                    data-aos-delay={100 * (index % 3)}
                  >
                    <S.Header>
                      <S.Image src={news.image} />
                    </S.Header>
                    <S.Content>
                      <S.CardTitle>{news.title.slice(0, maxCharatersTitle)}{news.title.length > maxCharatersTitle && '...'}</S.CardTitle>
                      <S.CardText>Olá, Marilene</S.CardText>
                      <S.LinkCTA text="Read more" link={news.link}/>
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
        {getAnnouncementsList(news)}
      <Container style={{ marginTop: '60px'}}>
        {hasMoreNewsToShow && (
          <Button text="Load more articles" onClick={handleLoadMoreNews} />
        )}
      </Container>
    </S.AnnoucementsSection>
  )
}

export default NewsSection
