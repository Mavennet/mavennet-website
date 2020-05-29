import React from "react"

import Container from "../../base/Container"
import NewsCard from "../../shared/NewsCard"

import * as S from "./styles"

const NewsSection = ({ title, news }) => {
  const getNewsList = items => {
    return (
      <S.NewsList>
        {items.map(item => (
          <S.NewsItem key={item.item.title}>
            <NewsCard {...item.item} />
          </S.NewsItem>
        ))}
      </S.NewsList>
    )
  }

  return (
    <S.NewsSection>
      <Container>
        <S.Title>{title}</S.Title>
        {getNewsList(news)}
      </Container>
    </S.NewsSection>
  )
}

export default NewsSection
