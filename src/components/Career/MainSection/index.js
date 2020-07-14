import React from "react"

import background from "../../../assets/images/backgrounds/career-bg.jpg"

import * as S from "./styles"

const MainSection = ({
  image,
  title,
  description,
  ctaText,
  handlePositionClick,
}) => {
  return (
    <S.MainSection
      background={background}
      center
      fill="#F9F5FE"
      parallaxActive={true}
    >
      <S.MainSectionContainer>
        <S.TextContent>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.CTA text={ctaText} type="button" onClick={handlePositionClick} />
        </S.TextContent>
      </S.MainSectionContainer>
    </S.MainSection>
  )
}

export default MainSection
