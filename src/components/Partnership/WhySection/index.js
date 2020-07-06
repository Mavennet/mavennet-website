import React from "react"

import CheckTextDescription from "../../shared/CheckTextDescription"
import Container from "../../base/Container"

import * as S from "./styles"

const WhySection = ({ title, whyList }) => {
  const getBenefitList = benefits => (
    <S.BenefitsList>
      {benefits.map(({ item }) => {
        const { title, description } = item

        return (
          <S.ListItem key={title}>
            <CheckTextDescription title={title} description={description} />
          </S.ListItem>
        )
      })}
    </S.BenefitsList>
  )

  return (
    <S.WhySection>
      <Container>
        <S.Title>{title}</S.Title>
        {getBenefitList(whyList)}
      </Container>
    </S.WhySection>
  )
}

export default WhySection
