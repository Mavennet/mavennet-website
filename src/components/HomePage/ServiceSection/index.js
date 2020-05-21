import React from "react"

import Container from "../../base/Container"
import StepItem from "../../shared/StepItem"
import TextArrowCTA from "../../shared/TextArrowCTA"

import * as S from "./styles"

const ServiceSection = ({ title, ctaText, steps }) => {
  const getItems = itemObj => {
    return itemObj.map(item => (
      <S.ListItem key={item.item.title}>
        <StepItem {...item.item} />
      </S.ListItem>
    ))
  }
  return (
    <S.Section>
      <Container>
        <S.Title>{title}</S.Title>
        <S.ItemsList>{getItems(steps)}</S.ItemsList>
        <TextArrowCTA text={ctaText} to="/service" />
      </Container>
    </S.Section>
  )
}

export default ServiceSection
