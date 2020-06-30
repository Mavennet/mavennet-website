import React from "react"

import * as S from "./styles"

const SolutionItem = ({ item, backgroundColor, isEven, isLast }) => {
  const { title, description, image, slug, ctaImage, sectionType } = item
  const isBanner = sectionType === "banner"

  return (
    <S.SolutionItem
      backgroundColor={backgroundColor}
      isEven={isEven}
      isLast={isLast}
    >
      <S.Wrapper>
        <S.ItemContainer isEven={isEven} isBanner={isBanner}>
          <S.Header isBanner={isBanner}>
            <S.Image src={image} alt={`${title} banner`} isBanner={isBanner} />
          </S.Header>
          <S.Content isBanner={isBanner} isEven={isEven}>
            <S.Logo src={ctaImage} alt={`${title} logo`} />
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.CTA to={slug} text="Learn More" />
          </S.Content>
        </S.ItemContainer>
      </S.Wrapper>
    </S.SolutionItem>
  )
}

export default SolutionItem
