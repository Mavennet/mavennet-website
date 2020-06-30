import React from "react"

import * as S from "./styles"

const Card = ({ title, description, ctaText, image, reverse }) => {
  return (
    <S.Card reverse={reverse}>
      <S.TextContent>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.CTA text={ctaText} to="/" />
      </S.TextContent>
      <S.ImageWrapper>
        <S.Image src={image} atl={title} />
      </S.ImageWrapper>
    </S.Card>
  )
}

export default Card
