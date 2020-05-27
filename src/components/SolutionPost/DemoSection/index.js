import React from "react"

import * as S from "./styles"

const DemoSection = ({ title, ctaText, image }) => {
  return (
    <S.DemoSection>
      <S.Image src={image} alt={title} />
      <S.TextContent>
        <S.Title>{title}</S.Title>
        <S.DemoButton text={ctaText} to="/contact-us" />
      </S.TextContent>
    </S.DemoSection>
  )
}

export default DemoSection
