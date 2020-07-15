import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

import background from "../../../assets/images/backgrounds/R&D-bg.jpg"

const MainSection = ({ slogan }) => {
  return (
    <S.MainSection background={background} parallaxActive={true}>
      <Container>
        <S.Title>{slogan}</S.Title>
      </Container>
    </S.MainSection>
  )
}

export default MainSection
