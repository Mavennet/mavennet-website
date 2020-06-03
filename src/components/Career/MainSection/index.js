import React from "react"

import background from "../../../assets/images/contact-us-bg.png"

import * as S from "./styles"

const MainSection = ({ image, title, description, ctaText }) => {
  return (
    <S.MainSection background={background}>
      <S.MainSectionContainer>
        <S.Image src={image} />
        <S.TextContent>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.CTA text={ctaText} />
        </S.TextContent>
      </S.MainSectionContainer>
    </S.MainSection>
  )
}

export default MainSection
