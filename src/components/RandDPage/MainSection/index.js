import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

import background from "../../../assets/images/planets-bg.png"

const MainSection = ({ slogan }) => {
  return (
    <S.MainSection background={background}>
      <Container>
        <S.Title>{slogan}</S.Title>
      </Container>
    </S.MainSection>
  )
}

export default MainSection
