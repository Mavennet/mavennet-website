import React from "react"

import Container from "../../base/Container"

import background from "../../../assets/images/backgrounds/industry-bg.jpg"

import * as S from "./styles"

const MainSection = ({ title, subtitle }) => {
  return (
    <S.MainSection background={background} parallaxActive={true}>
      <Container>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </Container>
    </S.MainSection>
  )
}

export default MainSection
