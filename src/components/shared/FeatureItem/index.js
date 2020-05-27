import React from "react"

import * as S from "./styles"

const FeatureItems = ({ title, description, image, isEven }) => {
  return (
    <S.FeatureItem>
      <S.ImageContainer isEven={isEven}>
        <S.Image src={image} alt={`${title} image`} />
      </S.ImageContainer>
      <S.TextContent>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextContent>
    </S.FeatureItem>
  )
}

export default FeatureItems
