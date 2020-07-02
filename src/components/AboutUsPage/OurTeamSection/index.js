import React, { forwardRef } from "react"

import SvgDivider from "../../shared/SvgDivider"
import Container from "../../base/Container"

import * as S from "./styles"

const OurTeamSection = ({ title, ctaText, team }, ref) => {
  const getTeamList = teamList => {
    return (
      <S.TeamList>
        {teamList.map(({ name, title, image }) => (
          <S.ListItem>
            <S.TeamCard>
              <S.Image src={image} alt={name} />
              <S.Name>{name}</S.Name>
              <S.Position>{title}</S.Position>
            </S.TeamCard>
          </S.ListItem>
        ))}
      </S.TeamList>
    )
  }

  return (
    <S.OurTeamSection ref={ref}>
      <S.BackgroundWrapper>
        <Container center>
          <S.Title>{title}</S.Title>
          {getTeamList(team)}
        </Container>
      </S.BackgroundWrapper>
      <S.CTA text={ctaText} to="/career" />
    </S.OurTeamSection>
  )
}

export default forwardRef(OurTeamSection)
