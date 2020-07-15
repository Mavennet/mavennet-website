import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const HowItWorksSection = ({ title, howItWorksItems }) => {
  const getHowItWorksItems = items => (
    <S.List>
      {items.map(({ image, title, description }) => (
        <S.ListItem key={title}>
          <S.Card>
            <S.Image src={image} alt={title} />
            <S.CardTitle>{title}</S.CardTitle>
            <S.Description>{description}</S.Description>
          </S.Card>
        </S.ListItem>
      ))}
    </S.List>
  )

  return (
    <S.HowItWorksSection data-aos="fade-up">
      <Container center>
        <S.Title>{title}</S.Title>
        {getHowItWorksItems(howItWorksItems)}
      </Container>
    </S.HowItWorksSection>
  )
}

export default HowItWorksSection
