import React from "react"

import * as S from "./styles"

import logoDark from "../../../assets/images/logo_dark.png"

const SideDrawer = ({ isOpen, closeDrawer }) => {
  return (
    <S.SideDrawer isOpen={isOpen}>
      <S.Container>
        <S.Header>
          <S.Logo src={logoDark} alt="Mavennet logo" />
          <S.CloseButton type="button" onClick={closeDrawer} />
        </S.Header>
      </S.Container>
    </S.SideDrawer>
  )
}

export default SideDrawer
