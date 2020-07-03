import React from "react"

import * as S from "./styles"

const NewsCard = ({ title, image, link, noBorder }) => {
  return (
    <S.NewsCard noBorder={noBorder}>
      <S.CardLink href={link} target="_blank">
        <S.ImageWrapper>
          <S.Image src={image} />
        </S.ImageWrapper>
        <S.Title>{title}</S.Title>
      </S.CardLink>
    </S.NewsCard>
  )
}

export default NewsCard
