import React from "react"

import Container from "../../base/Container"
import TextArrowCTA from "../../shared/TextArrowCTA"

import * as S from "./styles"

const GenericPartnersSection = ({ title, ctaText, partners, className }) => {
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
    <S.GenericPartnersSection className={className}>
      <Container center>
        <S.Title>{title}</S.Title>
        {getPartnersList(partners)}
        {ctaText && (
          <S.CTAContainer>
            <TextArrowCTA text={ctaText} to="/partnership" />
          </S.CTAContainer>
        )}
      </Container>
    </S.GenericPartnersSection>
  )
}

export default GenericPartnersSection
