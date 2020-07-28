import React, { useState, useEffect } from "react"

import Container from "../../base/Container"
import Button from "../../shared/Button"
import Canvas from "../../InteractBg/Canvas"

import backgroundMobile from "../../../assets/images/Home/mobile_background.png"
import background from "../../../assets/images/backgrounds/home-bg.jpg"

import * as S from "./styles"

const MainSection = ({ slogan, subtitle, ctaText }) => {
  const [windowWidth, setWidth] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    setWidth(window.innerWidth)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <S.MainSection background={background} backgroundMobile={backgroundMobile}>
      {windowWidth >= 768 && <Canvas />}
      <Container style={{ maxWidth: "790px" }}>
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
