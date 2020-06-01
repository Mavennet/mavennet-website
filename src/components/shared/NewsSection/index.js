import React, { forwardRef } from "react"

import Container from "../../base/Container"
import NewsCard from "../../shared/NewsCard"

import * as S from "./styles"

const NewsSection = ({ title, news, noBorder }, ref) => {
  const getNewsList = items => {
    console.log(items)
    return (
      <S.NewsList>
        {items &&
          items.map(item => (
            <S.NewsItem key={item.item.title}>
              <NewsCard {...item.item} noBorder={noBorder} />
            </S.NewsItem>
          ))}
      </S.NewsList>
    )
  }

  return (
    <S.NewsSection ref={ref}>
      <Container>
        <S.Title>{title}</S.Title>
        {getNewsList(news)}
      </Container>
    </S.NewsSection>
  )
}

export default forwardRef(NewsSection)
