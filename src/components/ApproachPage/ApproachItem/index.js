import React from "react"

import * as S from "./styles"

const ApproachItem = ({ cta, stepsList, title, description, position }) => {
  return (
    <S.ApproachItem hasPaddingLeft={position % 2 !== 0}>
      <S.ApproachTitle>{title}</S.ApproachTitle>
      <S.Description>{description}</S.Description>
      <S.StepsList>
        {stepsList.map(step => (
          <S.Step isHalfWidth={stepsList.length > 3}>{step}</S.Step>
        ))}
      </S.StepsList>

      <S.CTAButton text={cta.ctaText} to={cta.to} reverse />
    </S.ApproachItem>
  )
}

export default ApproachItem
