import React from "react"

import Container from "../../base/Container"
import Button from "../../shared/Button"

import backgroundMobile from "../../../assets/images/Home/mobile_background.png"
import background from "../../../assets/images/backgrounds/home-bg.jpg"

import * as S from "./styles"

const MainSection = ({ slogan, subtitle, ctaText }) => {
  return (
    <S.MainSection background={background} backgroundMobile={backgroundMobile}>
      <Container>
        <S.Slogan>{slogan}</S.Slogan>
        <S.Subtitle className="statement-medium">{subtitle}</S.Subtitle>
        <S.ButtonContainer>
          <Button text={ctaText} to="/solutions" />
        </S.ButtonContainer>
      </Container>
    </S.MainSection>
  )
}

export default MainSection
