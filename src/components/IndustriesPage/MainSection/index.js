import React from "react"

import Container from "../../base/Container"

import background from "../../../assets/images/comet_bg.png"

import * as S from "./styles"

const MainSection = ({ title, subtitle }) => {
  return (
    <S.MainSection background={background}>
      <Container>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </Container>
    </S.MainSection>
  )
}

export default MainSection
