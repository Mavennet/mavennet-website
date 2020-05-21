import React, { useEffect } from "react"

import DropDownClick from "../DropDownClick/DropDownClick"
import Button from "../Button"

import * as S from "./styles"

import logoDark from "../../../assets/images/logo_dark.png"

const SideDrawer = ({ isOpen, closeDrawer, menuItems }) => {
  useEffect(() => {
    const body = document.getElementsByTagName("BODY")[0]

    isOpen
      ? body.setAttribute("style", "position:fixed;")
      : body.setAttribute("style", "position:relative;")
  }, [isOpen])
  const getNavItem = item => {
    if (item.children.length > 0) {
      return (
        <DropDownClick key={item.name} item={item} isDrawerClosed={!isOpen} />
      )
    }
    return (
      <S.NavItem key={item.name}>
        <S.NavLink to={item.to}>{item.name}</S.NavLink>
      </S.NavItem>
    )
  }

  return (
    <S.SideDrawer isOpen={isOpen} onScroll={e => e.stopPropagation()}>
      <S.Container>
        <S.Header>
          <S.Logo src={logoDark} alt="Mavennet logo" />
          <S.CloseButton type="button" onClick={closeDrawer} />
        </S.Header>
        <S.NavBar>
          <S.NavList>{menuItems.map(item => getNavItem(item))}</S.NavList>
        </S.NavBar>
        <S.ButtonContainer>
          <Button text="Get In Touch" to="/about" />
        </S.ButtonContainer>
      </S.Container>
    </S.SideDrawer>
  )
}

export default SideDrawer
