import React from "react"

import Container from "../../base/Container/Container"
import StepItem from "../../shared/StepItem"
import TextArrowCta from "../../shared/TextArrowCta"

import * as S from "./styles"

const ServiceSection = ({ title, ctaText, steps }) => {
  const getItems = itemObj => {
    return itemObj.map(item => (
      <S.ListItem>
        <StepItem {...item.item} />
      </S.ListItem>
    ))
  }
  return (
    <S.Section>
      <Container>
        <S.Title>{title}</S.Title>
        <S.ItemsList>{getItems(steps)}</S.ItemsList>
        <TextArrowCta text={ctaText} to="service" />
      </Container>
    </S.Section>
  )
}

export default ServiceSection
