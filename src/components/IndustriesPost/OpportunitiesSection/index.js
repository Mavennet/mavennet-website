import React from "react"

import Container from "../../base/Container"
import NumberItem from "../../shared/NumberItem"

import * as S from "./styles"

const OpportunitiesSection = ({ title, items }) => {
  const getOpportunitiesList = opportunities => {
    return (
      <S.OpportunitiesList>
        {opportunities.map(({ item }) => (
          <S.OpportunityItem key={item.description}>
            <NumberItem
              numbers={item.number}
              image={item.image}
              description={item.description}
            />
          </S.OpportunityItem>
        ))}
      </S.OpportunitiesList>
    )
  }

  return (
    <S.OpportunitiesSection>
      <Container center>
        <S.Title>{title}</S.Title>
        {getOpportunitiesList(items)}
      </Container>
    </S.OpportunitiesSection>
  )
}

export default OpportunitiesSection
