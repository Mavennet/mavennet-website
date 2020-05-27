import React from "react"
import { Link } from "gatsby"

import ImageArrowCTA from "../../shared/ImageArrowCTA"

import * as S from "./styles"

const SolutionItem = ({ item, backgroundColor }) => {
  const { title, description, image, slug, ctaImage, sectionType } = item

  return (
    <S.SolutionItem backgroundColor={backgroundColor}>
      <S.ItemContainer>
        <S.Header>
          <S.Image
            src={image}
            alt={`${title} banner`}
            banner={sectionType === "banner" ? "130%" : "100%"}
          />
        </S.Header>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Content>
        <ImageArrowCTA to={slug} companyName={title} image={ctaImage} />
      </S.ItemContainer>
    </S.SolutionItem>
  )
}

export default SolutionItem
