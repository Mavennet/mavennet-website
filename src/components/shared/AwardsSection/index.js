import React from "react"

import Container from "../../base/Container"

import { useAwardsData } from "../../../hooks/use-awards-data"

import * as S from "./styles"

const AwardsSection = ({ title }) => {
  const awardsData = useAwardsData()

  const getAwardsItems = awardsData =>
    awardsData.map(award => {
      const { id, title, logo } = award
      return (
        <S.Award key={id}>
          <S.ImageWrapper>
            <S.AwardImage src={logo} alt={title} />
          </S.ImageWrapper>
          <S.AwardText>{title}</S.AwardText>
        </S.Award>
      )
    })

  return (
    <S.AwardsSection data-aos="fade-up">
      <Container>
        <S.Title>{title}</S.Title>
        <S.AwardsList>{getAwardsItems(awardsData)}</S.AwardsList>
      </Container>
    </S.AwardsSection>
  )
}

export default AwardsSection
