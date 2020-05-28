import React from "react"

import Container from "../../base/Container"

import background from "../../../assets/images/Home/mobile_background.png"

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
