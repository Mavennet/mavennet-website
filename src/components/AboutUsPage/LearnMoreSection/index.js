import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const LearnMoreSection = ({ title, linksList }) => {
  const getLinkList = links => (
    <S.LinksList>
      {links.map(({ item }) => {
        const { link, ctaText, description } = item
        return (
          <S.ListItem>
            <S.LinkItem>
              <S.LinkCTA text={ctaText} to={link} />
              <S.LinkDescription>{description}</S.LinkDescription>
            </S.LinkItem>
          </S.ListItem>
        )
      })}
    </S.LinksList>
  )

  return (
    <S.LearnMoreSection>
      <Container center>
        <S.Title>{title}</S.Title>
        {getLinkList(linksList)}
      </Container>
    </S.LearnMoreSection>
  )
}

export default LearnMoreSection
