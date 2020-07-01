import React from "react"

import * as S from "./styles"

const MainSection = ({ image, title, description, ctaText }) => {
  return (
    <S.MainSection background={image} center fill="#F9F5FE">
      <S.MainSectionContainer>
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
