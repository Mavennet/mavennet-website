import React from "react"

import * as S from "./styles"

const WhoWeAre = ({ title, subTitle, description, ctaText, handleClick }) => {
  return (
    <S.WhoWeAre data-aos="fade-up">
      <S.Title>{title}</S.Title>
      <S.SectionContainer center>
        <S.TextContent>
          <S.SubTitle>{subTitle}</S.SubTitle>
          <S.Description>{description}</S.Description>
          <S.CTA text={ctaText} handleClick={handleClick} />
        </S.TextContent>
        <S.VideoWrapper>
          <S.VideoReactPlayer
            url="https://www.youtube.com/watch?v=Oc3IDO_Lrlg"
            controls
          ></S.VideoReactPlayer>
        </S.VideoWrapper>
      </S.SectionContainer>
    </S.WhoWeAre>
  )
}

export default WhoWeAre
