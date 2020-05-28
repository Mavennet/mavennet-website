import React from "react"

import Container from "../../base/Container"

import checkIcon from "../../../assets/icons/check-solid.svg"

import * as S from "./styles"

const SolutionDescriptionSection = ({ featureType, title, image, items }) => {
  const isBanner = featureType === "banner"
  console.log(isBanner)

  const getPointsList = points => {
    return (
      <S.PointsList isBanner={isBanner}>
        {points.map(point => (
          <S.PointsItem key={point}>
            <S.CheckIcon src={checkIcon} alt="Check icon" />
            {point}
          </S.PointsItem>
        ))}
      </S.PointsList>
    )
  }
  return (
    <S.SolutionDescriptionSection>
      <Container center>
        <S.Title>{title}</S.Title>
        <S.Content isBanner={isBanner}>
          <S.ImageContainer isBanner={isBanner}>
            <S.Image src={image} alt={`${title} image`} />
          </S.ImageContainer>
          {getPointsList(items)}
        </S.Content>
      </Container>
    </S.SolutionDescriptionSection>
  )
}

export default SolutionDescriptionSection