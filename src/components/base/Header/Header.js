import React, { useState, useEffect } from "react"

import { ThemeProvider } from "styled-components"

import Hamburguer from "../../shared/Hamburguer/Hamburger"
import SideDrawer from "../../shared/SideDrawer/SideDrawer"

import themes from "./themes"

import {
  /*getHeaderItems,*/ getSideDrawerItems,
} from "../../../helpers/menuItems"

import * as S from "./styles"

import logoWhite from "../../../assets/images/logo_white.svg"

const Header = ({ menuItems }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.primary)

  // const [menuItemsState, setMenuItemsState] = useState([])
  const [drawerItemsState, setDrawerItemsState] = useState([])

  const [isDrawerOpen, setDrawerState] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", checkScroll)
    return () => {
      window.removeEventListener("scroll", checkScroll)
    }
  })

  useEffect(() => {
    // const headerItems = getHeaderItems(menuItems)
    // const headerList = Object.values(headerItems)
    // setMenuItemsState(headerList)

    const sideDrawerItems = getSideDrawerItems(menuItems)
    const drawerList = Object.values(sideDrawerItems)
    setDrawerItemsState(drawerList)
  }, [menuItems])

  const checkScroll = () => {
    const scroll = window.scrollY < 70
    setCurrentTheme(scroll ? themes.primary : themes.sticky)
  }

  const handleDrawerState = state => {
    setDrawerState(state)
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <S.Header>
        <S.HeaderContainer>
          <S.LogoLink to="/">
            <S.Logo src={currentTheme.logo} alt="Mavennet logo" />
          </S.LogoLink>
          <S.Navbar></S.Navbar>
          <Hamburguer handleClick={handleDrawerState} />
        </S.HeaderContainer>
      </S.Header>
      <SideDrawer
        menuItems={drawerItemsState}
        isOpen={isDrawerOpen}
        closeDrawer={() => handleDrawerState(false)}
      />
    </ThemeProvider>
  )
}

export default Header
