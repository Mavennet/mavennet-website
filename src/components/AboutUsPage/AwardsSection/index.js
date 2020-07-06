import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const AwardsSection = ({ title, awardsList }) => {
  const getAwardsList = awards => {
    return (
      <S.AwardsList>
        {awards.map((award, index) => (
          <S.ListItem key={index}>
            <S.AwardImage src={award} />
          </S.ListItem>
        ))}
      </S.AwardsList>
    )
  }
  return (
    <S.AwardsSection>
      <Container center>
        <S.Title>{title}</S.Title>
        {getAwardsList(awardsList)}
      </Container>
    </S.AwardsSection>
  )
}

export default AwardsSection
