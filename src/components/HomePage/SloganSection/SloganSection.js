import React from "react"

import Container from "../../base/Container"
import Button from "../../shared/Button"

import * as S from "./styles"

const SloganSection = ({ slogan, subtitle, ctaText }) => {
  return (
    <S.Section>
      <Container style={{ maxWidth: "790px" }}>
        <S.Slogan>{slogan}</S.Slogan>
        <S.Subtitle className="statement-medium">{subtitle}</S.Subtitle>
        <S.ButtonContainer>
          <Button text={ctaText} to="/solutions" />
        </S.ButtonContainer>
      </Container>
    </S.Section>
  )
}

export default SloganSection
