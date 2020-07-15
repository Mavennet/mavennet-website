import React from "react"

import * as S from "./styles"

const Card = ({ title, description, ctaText, image, reverse, to }) => {
  return (
    <S.Card reverse={reverse}>
      <S.TextContent>
        <S.Title data-aos="fade-up">{title}</S.Title>
        <S.Description data-aos="fade-up" data-aos-delay="150">
          {description}
        </S.Description>
        <S.CTA text={ctaText} to={to} />
      </S.TextContent>
      <S.ImageWrapper>
        <S.Image src={image} atl={title} />
      </S.ImageWrapper>
    </S.Card>
  )
}

export default Card
