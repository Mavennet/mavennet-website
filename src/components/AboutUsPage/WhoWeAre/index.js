import React from "react"

import * as S from "./styles"

const WhoWeAre = ({ title, subTitle, description, ctaText }) => {
  return (
    <S.WhoWeAre>
      <S.Title>{title}</S.Title>
      <S.SectionContainer center>
        <S.TextContent>
          <S.SubTitle>{subTitle}</S.SubTitle>
          <S.Description>{description}</S.Description>
          <S.CTA text={ctaText}></S.CTA>
        </S.TextContent>
        <S.VideoWrapper>
          <S.IFrame src="https://www.youtube.com/embed/dQw4w9WgXcQ"></S.IFrame>
        </S.VideoWrapper>
      </S.SectionContainer>
    </S.WhoWeAre>
  )
}

export default WhoWeAre
