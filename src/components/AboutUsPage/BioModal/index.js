import React, { useEffect } from "react"

import SocialNetLink from "../../shared/SocialNetLink"
import { Dialog } from "@material-ui/core"

import * as S from "./styles"

const BioModal = ({ teamMember, open, handleClose }) => {
  const { name, title, bio, linkedin, image } = teamMember
  useEffect(() => {
    if (!open) return
    document.getElementsByTagName("html")[0].style.overflow = "hidden";

    return (() => {
      document.getElementsByTagName("html")[0].style = "";
    })
  }, [open]);

  // for enabling
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={false}>
      {teamMember && (
        <S.Content>
          <S.ModalHeader>
            <S.CloseIcon onClick={handleClose} />
          </S.ModalHeader>
          <S.Main>
            <S.Info>
              <S.Image src={image} alt={name} />
              <S.Name>{name}</S.Name>
              <S.Position>{title}</S.Position>
              <S.SocialSection>
                <SocialNetLink
                  socialNetwork="linkedin"
                  userTag={`in/${linkedin}`}
                />
              </S.SocialSection>
            </S.Info>
            <S.BioContainer>
              <S.Bio>{bio}</S.Bio>
            </S.BioContainer>
          </S.Main>
        </S.Content>
      )}
    </Dialog>
  )
}

export default BioModal
