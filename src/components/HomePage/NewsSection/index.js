import React from "react"

import Container from "../../base/Container"
import NewsCard from "../../shared/NewsCard"

import * as S from "./styles"

const NewsSection = ({ title, ctaText, news }) => {
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
    <S.NewsSection data-aos="fade-up">
      <Container style={{ position: "relative" }}>
        <S.Title>{title}</S.Title>
        {getNewsList(news)}
        <S.CTAContainer>
          <S.CTA text={ctaText} to="/news" />
        </S.CTAContainer>
      </Container>
    </S.NewsSection>
  )
}

export default NewsSection
