import React from "react"

import Container from "../../base/Container"
import Button from "../../shared/Button"
import Particles from "react-particles-js"

import backgroundMobile from "../../../assets/images/Home/mobile_background.png"
import background from "../../../assets/images/backgrounds/home-bg.jpg"

import * as S from "./styles"

const particlesStyles = {
  position: "absolute",
  right: 0,
  left: 0,
  top: 0,
  bottom: 0,
  zIndex: -1,
}

const MainSection = ({ slogan, subtitle, ctaText }) => {
  return (
    <S.MainSection background={background} backgroundMobile={backgroundMobile}>
      <Particles
        style={particlesStyles}
        params={{
          particles: {
            color: {
              value: "#000000",
            },
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
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
