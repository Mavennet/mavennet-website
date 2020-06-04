import React from "react"

import * as S from "./styles"

const FeatureTimeline = ({ items }) => {
  return (
    <S.FeatureTimeline>
      <S.FeatureList>
        {items.map(({ title, description, image }, index) => (
          <S.ListItem key={title}>
            <S.Feature isEven={index % 2 === 0}>
              <S.TextContent>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
              </S.TextContent>
              <S.ImageWrapper>
                <S.Image src={image} alt={title} />
              </S.ImageWrapper>
            </S.Feature>
          </S.ListItem>
        ))}
      </S.FeatureList>
    </S.FeatureTimeline>
  )
}

export default FeatureTimeline
