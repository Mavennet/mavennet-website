import React, { useState, forwardRef } from "react"

import Container from "../../base/Container"
import BioModal from "../BioModal"

import * as S from "./styles"

const OurTeamSection = ({ title, ctaText, team }, ref) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentTeamMember, setCurrentTeamMember] = useState({})

  const handleClose = () => setModalOpen(false)
  const handleOpen = teamMember => {
    setCurrentTeamMember(teamMember)
    setModalOpen(true)
  }

  const getTeamList = teamList => {
    return (
      <S.TeamList>
        {teamList.map(teamMember => {
          const { name, title, image } = teamMember
          return (
            <S.ListItem key={name}>
              <S.TeamCard onClick={() => handleOpen(teamMember)}>
                <S.Image src={image} alt={name} />
                <S.Name>{name}</S.Name>
                <S.Position>{title}</S.Position>
              </S.TeamCard>
            </S.ListItem>
          )
        })}
      </S.TeamList>
    )
  }

  return (
    <S.OurTeamSection ref={ref}>
      <BioModal
        teamMember={currentTeamMember}
        open={modalOpen}
        handleClose={handleClose}
      ></BioModal>
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
