import React from "react"

import ImageArrowCTA from "../../shared/ImageArrowCTA"

import * as S from "./styles"

const SolutionItem = ({ item, backgroundColor, isEven }) => {
  const { title, description, image, slug, ctaImage, sectionType } = item
  const isBanner = sectionType === "banner"

  return (
    <S.SolutionItem backgroundColor={backgroundColor} isEven={isEven}>
      <S.Wrapper>
        <S.ItemContainer isEven={isEven} isBanner={isBanner}>
          <S.Header isBanner={isBanner}>
            <S.Image src={image} alt={`${title} banner`} isBanner={isBanner} />
          </S.Header>
          <S.Content isBanner={isBanner} isEven={isEven}>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <ImageArrowCTA to={slug} companyName={title} image={ctaImage} />
          </S.Content>
        </S.ItemContainer>
      </S.Wrapper>
    </S.SolutionItem>
  )
}

export default SolutionItem
