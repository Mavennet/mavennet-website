import React from "react"

import * as S from "./styles"

const NewsCard = ({ title, image, link }) => {
  return (
    <S.NewsCard>
      <S.CardLink href={link} target="_blank">
        <S.Image src={image} />
        <S.Title>{title}</S.Title>
      </S.CardLink>
    </S.NewsCard>
  )
}

export default NewsCard