import React, { useState } from "react"

import Hamburguer from "../../shared/Hamburguer/Hamburger"
import SideDrawer from "../../shared/SideDrawer/SideDrawer"

import * as S from "./styles"

import logoWhite from "../../../assets/images/logo_white.png"

const Header = () => {
  const [isDrawerOpen, setDrawerState] = useState(false)

  const handleDrawerState = state => {
    setDrawerState(state)
  }

  return (
    <>
      <S.Header>
        <S.LogoLink>
          <S.Logo src={logoWhite} alt="Mavennet logo" />
        </S.LogoLink>
        <S.Navbar>
          <S.NavList>
            <S.ListItem>
              <S.DropdownWrapper>
                <S.NavLink>Solutions</S.NavLink>
                <S.DropdownList>
                  <S.NavLink>Solutions</S.NavLink>
                  <S.NavLink>Neoflow</S.NavLink>
                  <S.NavLink>MetalTrail</S.NavLink>
                  <S.NavLink>QCAD</S.NavLink>
                  <S.NavLink>Mavenstamp</S.NavLink>
                </S.DropdownList>
              </S.DropdownWrapper>
              <S.NavLink>Service</S.NavLink>
              <S.DropdownWrapper>
                <S.NavLink>Industries</S.NavLink>
                <S.DropdownList>
                  <S.NavLink>Oil and Gas</S.NavLink>
                  <S.NavLink>Metal</S.NavLink>
                  <S.NavLink>Financial Services</S.NavLink>
                  <S.NavLink>Legal Tech</S.NavLink>
                  <S.NavLink>Digital Media</S.NavLink>
                </S.DropdownList>
              </S.DropdownWrapper>
              <S.DropdownWrapper>
                <S.NavLink>Company</S.NavLink>
                <S.DropdownList>
                  <S.NavLink>About Us</S.NavLink>
                  <S.NavLink>Newsroom</S.NavLink>
                  <S.NavLink>Partners</S.NavLink>
                  <S.NavLink>Career</S.NavLink>
                  <S.NavLink>Contact</S.NavLink>
                </S.DropdownList>
              </S.DropdownWrapper>
              <S.NavLink>Career</S.NavLink>
            </S.ListItem>
            <S.NavLink></S.NavLink>
          </S.NavList>
        </S.Navbar>
        <Hamburguer handleClick={handleDrawerState} />
      </S.Header>
      <SideDrawer
        isOpen={isDrawerOpen}
        closeDrawer={() => handleDrawerState(false)}
      />
    </>
  )
}

export default Header
