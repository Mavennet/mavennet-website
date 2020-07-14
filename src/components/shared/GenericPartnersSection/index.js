import React from "react"

import * as S from "./styles"

const GenericPartnersSection = ({ title, ctaText, partners, className }) => {
  const getPartnersList = items => {
    return (
      <S.PartnersList>
        {items.map(item => (
          <S.PartnersItem key={item.id}>
            <S.PartnerImage src={item.logo} alt={item.title} />
          </S.PartnersItem>
        ))}
      </S.PartnersList>
    )
  }

  return (
    <S.GenericPartnersSection className={className} data-aos="fade-up">
      <S.PartnersContainer center>
        <S.Title>{title}</S.Title>
        {getPartnersList(partners)}
      </S.PartnersContainer>
    </S.GenericPartnersSection>
  )
}

export default GenericPartnersSection
