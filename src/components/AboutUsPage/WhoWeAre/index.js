import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const WhoWeAre = ({ title, subTitle, description, ctaText }) => {
  return (
    <S.WhoWeAre>
      <Container center>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <S.Description>{description}</S.Description>
        <S.CTA text={ctaText}></S.CTA>
      </Container>
    </S.WhoWeAre>
  )
}

export default WhoWeAre
