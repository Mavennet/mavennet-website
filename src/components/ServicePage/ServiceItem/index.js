import React from "react"

import TextArrowCTA from "../../shared/TextArrowCTA"

import * as S from "./styles"

const ServiceItem = ({ cta, stepsList, title, position }) => {
  return (
    <S.ServiceItem hasPaddingLeft={position % 2 !== 0}>
      <S.ServiceTitle>{title}</S.ServiceTitle>
      <S.StepsList>
        {stepsList.map(step => (
          <S.Step>{step}</S.Step>
        ))}
      </S.StepsList>
      {position % 2 !== 0 ? (
        <S.CTAButton text={cta.ctaText} to="/contact-us" reverse />
      ) : (
        <TextArrowCTA text={cta.ctaText} to="contact-us" />
      )}
    </S.ServiceItem>
  )
}

export default ServiceItem
