import React from "react"

import Container from "../../base/Container"

import background from "../../../assets/images/space_background.png"

import * as S from "./styles"

const MainSection = ({ title, subtitle }) => {
  return (
    <S.MainSection background={background}>
      <Container center>
        <S.Title>{title}</S.Title>
        <S.Description>{subtitle}</S.Description>
      </Container>
    </S.MainSection>
  )
}

export default MainSection
