import React from "react"

import * as S from "./styles"

const colors = [
  "--c-p-medium-purple",
  "--c-p-biloba-flower",
  "--c-p-royal-purple",
  "--c-p-purple-heart",
]

const TimeLineSection = ({ title, image, timeline }) => {
  const getTimeLineItems = items => (
    <S.TimeLine>
      {items.map(({ item }, index) => {
        const { year, description } = item
        return (
          <S.TimeLineItem color={colors[index % colors.length]}>
            <S.TimeLineCircle color={colors[index % colors.length]} />
            <S.TimeLineDate>{year}</S.TimeLineDate>
            <S.TimeLineDescription>{description}</S.TimeLineDescription>
          </S.TimeLineItem>
        )
      })}
    </S.TimeLine>
  )
  return (
    <S.TimeLineSection>
      <S.TimeLineContainer>
        <S.Title>{title}</S.Title>
        <S.Content>
          {getTimeLineItems(timeline)}
          <S.Image src={image} alt={title} />
        </S.Content>
      </S.TimeLineContainer>
    </S.TimeLineSection>
  )
}

export default TimeLineSection
