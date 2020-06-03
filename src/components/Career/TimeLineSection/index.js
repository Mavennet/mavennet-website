import React from "react"

import * as S from "./styles"

const lista = [
  {
    date: "2017",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ips",
  },
  {
    date: "2018",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ips",
  },
  {
    date: "2019",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ips",
  },
  {
    date: "Present",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ips",
  },
]

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
        console.log(item)
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
