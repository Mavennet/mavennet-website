import React from "react"

import * as S from "./styles"

const WhoWeAre = ({ title, subTitle, description, ctaText, handleClick }) => {
  return (
    <S.WhoWeAre>
      <S.Title>{title}</S.Title>
      <S.SectionContainer center>
        <S.TextContent>
          <S.SubTitle>{subTitle}</S.SubTitle>
          <S.Description>{description}</S.Description>
          <S.CTA text={ctaText} handleClick={handleClick} />
        </S.TextContent>
        <S.VideoWrapper>
          <S.IFrame
            id="ls_embed_1593702416"
            src="https://livestream.com/accounts/25643695/events/8056412/videos/179195193/player?width=640&height=360&enableInfo=true&defaultDrawer=&autoPlay=true&mute=false"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></S.IFrame>
        </S.VideoWrapper>
      </S.SectionContainer>
    </S.WhoWeAre>
  )
}

export default WhoWeAre
