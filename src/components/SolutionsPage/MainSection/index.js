import React from "react"

import Container from "../../base/Container"

import background from "../../../assets/images/backgrounds/solution-bg.jpg"

import * as S from "./styles"

const MainSection = ({ title, subtitle }) => {
  return (
    <S.MainSection background={background} parallaxActive={true}>
      <Container center>
        <S.Title>{title}</S.Title>
        <S.Description>{subtitle}</S.Description>
      </Container>
    </S.MainSection>
  )
}

export default MainSection
