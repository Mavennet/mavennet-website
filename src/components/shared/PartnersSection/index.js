import React from "react"

import Container from "../../base/Container"
import TextArrowCTA from "../../shared/TextArrowCTA"

import * as S from "./styles"

const PartnersSection = ({ title, ctaText, partners }) => {
  const getPartnersList = items => {
    return (
      <S.PartnersList>
        {items.map(item => (
          <S.PartnersItem key={item.id}>
            <S.PartnerLink href={item.link} target="_blank">
              <S.PartnerImage src={item.logo} alt={item.title} />
            </S.PartnerLink>
          </S.PartnersItem>
        ))}
      </S.PartnersList>
    )
  }

  return (
    <S.PartnersSection>
      <Container center>
        <S.Title>{title}</S.Title>
        {getPartnersList(partners)}
        <S.CTAContainer>
          <TextArrowCTA text={ctaText} to="/partnership" />
        </S.CTAContainer>
      </Container>
    </S.PartnersSection>
  )
}

export default PartnersSection
