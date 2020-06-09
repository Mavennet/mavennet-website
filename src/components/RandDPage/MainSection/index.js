import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

import background from "../../../assets/images/planets-bg.png"

const MainSection = () => {
  return (
    <S.MainSection background={background}>
      <Container>
        <S.Title>
          Mavennet R & D Slogan Lorem ipsum dolor sit amet, consectetuer
        </S.Title>
      </Container>
    </S.MainSection>
  )
}

export default MainSection
