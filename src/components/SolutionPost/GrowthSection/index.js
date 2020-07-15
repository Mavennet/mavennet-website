import React from "react"

import NumberItem from "../../shared/NumberItem"

import * as S from "./styles"

const GrowthSection = ({
  type,
  summaryType,
  title,
  description,
  image,
  items,
}) => {
  const getNumbersItems = itemsList => {
    return (
      <S.NumbersList>
        {itemsList.map(item => (
          <S.NumberItem key={item.description}>
            <NumberItem {...item} />
          </S.NumberItem>
        ))}
      </S.NumbersList>
    )
  }

  return (
    <S.GrowthSection data-aos="fade-up">
      <S.GrowthContainer>
        {getNumbersItems(items)}
        <S.TextContent>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.TextContent>
      </S.GrowthContainer>
    </S.GrowthSection>
  )
}

export default GrowthSection
