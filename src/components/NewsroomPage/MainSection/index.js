import React from "react"

import * as S from "./styles"

const MainSection = ({ title, ctaText, featuredNews }) => {
  const { image: newsImage, title: newsTitle, link: newsLink } = featuredNews.node.frontmatter
  console.log(featuredNews)
  return (
    <S.MainSection backgroundColor="--c-p-meteorite">
      <S.MainSectionContainer>
        <S.TextContent>
          <S.Title>{title}</S.Title>
          <S.FeaturedTitle>{newsTitle}</S.FeaturedTitle>
          <S.CTA text={ctaText} link={newsLink} />
        </S.TextContent>
        <S.ImageWrapper>
          <S.Image src={newsImage} alt={`'${title}' news image`} />
        </S.ImageWrapper>
      </S.MainSectionContainer>
    </S.MainSection>
  )
}

export default MainSection
