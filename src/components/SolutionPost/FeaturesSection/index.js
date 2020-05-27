import React from "react"

import Container from "../../base/Container"

import FeatureItem from "../../shared/FeatureItem"

import * as S from "./styles"

const getFeatureList = list => {
  return (
    <S.FeatureList>
      {list.map((item, index) => (
        <S.FeatureItem>
          <FeatureItem {...item} isEven={index % 2 === 0} />
        </S.FeatureItem>
      ))}
    </S.FeatureList>
  )
}

const FeaturesSection = ({ title, items }) => {
  return (
    <S.FeaturesSection>
      <Container center>
        <S.Title>{title}</S.Title>
        {getFeatureList(items)}
      </Container>
    </S.FeaturesSection>
  )
}

export default FeaturesSection
