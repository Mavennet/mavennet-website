import React from "react"

import * as S from "./styles"

const InfoImageItem = ({
  image,
  title,
  description,
  ctaText,
  reverse,
  imgMaxWidth,
}) => {
  return (
    <S.InfoImageItem reverse={reverse}>
      <S.Column>
        <S.Image
          src={image}
          alt={title}
          reverse={reverse}
          imgMaxWidth={imgMaxWidth}
        />
      </S.Column>
      <S.Column>
        <S.TextContent>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.CTAButton text={ctaText} to="/" reverse={reverse} />
        </S.TextContent>
      </S.Column>
    </S.InfoImageItem>
  )
}

export default InfoImageItem
