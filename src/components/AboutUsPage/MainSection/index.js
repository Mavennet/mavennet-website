import React from "react"

import Container from "../../base/Container"

import Background from "../../../assets/images/contact-us-bg.png"

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
