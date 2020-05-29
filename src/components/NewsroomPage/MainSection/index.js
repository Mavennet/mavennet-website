import React from "react"

import * as S from "./styles"

const MainSection = ({ title, ctaText, featuredNews }) => {
  return (
    <S.MainSection backgroundColor="--c-p-meteorite">
      <S.MainSectionContainer>
        <S.TextContent>
          <S.Title>{title}</S.Title>
          <S.FeaturedTitle>{featuredNews.title}</S.FeaturedTitle>
          <S.CTA text={ctaText} link={featuredNews.link} />
        </S.TextContent>
        <S.ImageWrapper>
          <S.Image src={featuredNews.image} alt={`'${title}' news image`} />
        </S.ImageWrapper>
      </S.MainSectionContainer>
    </S.MainSection>
  )
}

export default MainSection
