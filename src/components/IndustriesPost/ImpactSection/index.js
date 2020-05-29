import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const ImpactSection = ({ title, items }) => {
  const getImpactList = impacts => {
    return (
      <S.ImpactList>
        {impacts.map(({ item }) => (
          <S.ImpactItem key={item.title}>
            <S.ImpactImage />
            <S.TextContent>
              <S.ImpactTitle>{item.title}</S.ImpactTitle>
              <S.ImpactDescription>{item.description}</S.ImpactDescription>
            </S.TextContent>
          </S.ImpactItem>
        ))}
      </S.ImpactList>
    )
  }

  return (
    <S.ImpactSection backgroundColor="--c-p-selago">
      <Container>
        <S.Title>{title}</S.Title>
        {getImpactList(items)}
      </Container>
    </S.ImpactSection>
  )
}

export default ImpactSection
