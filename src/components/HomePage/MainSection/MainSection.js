import React from "react"

import Container from "../../base/Container"
import Button from "../../shared/Button"

import mobileBackground from "../../../assets/images/Home/mobile_background.png"

import * as S from "./styles"

const MainSection = ({ slogan, ctaText }) => {
  return (
    <S.MainSection background={mobileBackground}>
      <Container>
        <S.Slogan>{slogan}</S.Slogan>
        <S.ButtonContainer>
          <Button text={ctaText} to="/solutions" />
        </S.ButtonContainer>
      </Container>
    </S.MainSection>
  )
}

export default MainSection
