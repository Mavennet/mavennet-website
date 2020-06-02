import React from "react"

import Container from "../../base/Container"
import PartnersSlider from "../../shared/PartnersSlider"

import * as S from "./styles"

const PartnersSection = ({ partners }) => {
  return (
    <S.PartnersSection>
      <Container>
        <PartnersSlider partners={partners} />
      </Container>
    </S.PartnersSection>
  )
}

export default PartnersSection
