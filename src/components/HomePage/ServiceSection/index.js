import React from "react"

import Container from "../../base/Container"
import StepItem from "../../shared/StepItem"

import arrow from "../../../assets/icons/curve-arrow.svg"

import * as S from "./styles"

const ServiceSection = ({ title, description, ctaText, steps }) => {
  const getItems = itemObj => {
    return itemObj.map((item, index) => (
      <React.Fragment key={item.item.title}>
        <S.ListItem>
          <StepItem {...item.item} />
        </S.ListItem>
        {index < itemObj.length - 1 && (
          <S.Arrow src={arrow} alt="Curved arrow" reverse={index % 2 === 0} />
        )}
      </React.Fragment>
    ))
  }
  return (
    <S.Section data-aos="fade-up">
      <Container>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </Container>
      <S.StepsSection flatMobile dividerIndex={true}>
        <Container>
          <S.ItemsList>{getItems(steps)}</S.ItemsList>
          <S.CTAContainer>
            <S.CTA text={ctaText} to="/approach" />
          </S.CTAContainer>
        </Container>
      </S.StepsSection>
    </S.Section>
  )
}

export default ServiceSection
