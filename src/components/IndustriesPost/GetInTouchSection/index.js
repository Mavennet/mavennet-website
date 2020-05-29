import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const GetInTouchSection = ({ title, ctaText }) => {
  return (
    <S.GetInTouchSection>
      <Container center>
        <S.Title>{title}</S.Title>
        <S.CTAButton text={ctaText} to="/contact-us" />
      </Container>
    </S.GetInTouchSection>
  )
}

export default GetInTouchSection
