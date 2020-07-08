import React from "react"

import Container from "../../base/Container"

import Background from "../../../assets/images/backgrounds/office-bg.jpg"

import * as S from "./styles"

const MainSection = ({ title }) => {
  return (
    <S.MainSection background={Background}>
      <Container center>
        <S.Title>{title}</S.Title>
      </Container>
    </S.MainSection>
  )
}

export default MainSection
