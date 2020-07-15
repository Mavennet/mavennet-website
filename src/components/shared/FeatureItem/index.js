import React from "react"

import * as S from "./styles"

const FeatureItems = ({ title, description, image, isEven }) => {
  return (
    <S.FeatureItem isEven={isEven}>
      <S.ImageContainer isEven={isEven} data-aos="fade-up">
        <S.Image src={image} alt={`${title} image`} />
      </S.ImageContainer>
      <S.TextContent>
        <S.Title data-aos="fade-up">{title}</S.Title>
        <S.Description data-aos="fade-up">{description}</S.Description>
      </S.TextContent>
    </S.FeatureItem>
  )
}

export default FeatureItems
