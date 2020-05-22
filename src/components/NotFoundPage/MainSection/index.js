import React from "react"

import backgroundImage from "../../../assets/images/404Page/background.png"

import * as S from "./styles"

const MainSection = ({ title, description, ctaText, image }) => {
  return (
    <S.MainSection background={backgroundImage}>
      <S.SectionContainer center>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.HomeButton text={ctaText} to="/" />
        <S.Image src={image} title="Astronaut Lost in Space" />
      </S.SectionContainer>
    </S.MainSection>
  )
}

export default MainSection
