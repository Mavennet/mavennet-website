import React from "react"

import * as S from "./styles"

const ApproachItem = ({ cta, stepsList, title, position }) => {
  return (
    <S.ApproachItem hasPaddingLeft={position % 2 !== 0}>
      <S.ApproachTitle>{title}</S.ApproachTitle>
      <S.StepsList>
        {stepsList.map(step => (
          <S.Step>{step}</S.Step>
        ))}
      </S.StepsList>
      {position % 2 !== 0 ? (
        <S.CTAButton text={cta.ctaText} to="/contact-us" reverse />
      ) : (
        <S.TextCTA text={cta.ctaText} to="contact-us" />
      )}
    </S.ApproachItem>
  )
}

export default ApproachItem
