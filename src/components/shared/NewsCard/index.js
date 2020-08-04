import React from "react"

import * as S from "./styles"

const NewsCard = ({ title, image, link, noBorder, maxTextLength=60 }) => {
  return (
    <S.NewsCard noBorder={noBorder}>
      <S.CardLink href={link} target="_blank">
        <S.ImageWrapper>
          <S.Image src={image} />
        </S.ImageWrapper>
        <S.Title>{title.slice(0, maxTextLength)}{title.length > maxTextLength && '...'}</S.Title>
      </S.CardLink>
    </S.NewsCard>
  )
}

export default NewsCard
