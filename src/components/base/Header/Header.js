import React, { useState, useEffect } from "react"

import Hamburguer from "../../shared/Hamburguer/Hamburger"
import SideDrawer from "../../shared/SideDrawer/SideDrawer"

import {
  /*getHeaderItems,*/ getSideDrawerItems,
} from "../../../helpers/menuItems"

import * as S from "./styles"

import logoWhite from "../../../assets/images/logo_white.png"

const Header = ({ menuItems }) => {
  // const [menuItemsState, setMenuItemsState] = useState([])
  const [drawerItemsState, setDrawerItemsState] = useState([])

  const [isDrawerOpen, setDrawerState] = useState(false)

  useEffect(() => {
    // const headerItems = getHeaderItems(menuItems)
    // const headerList = Object.values(headerItems)
    // setMenuItemsState(headerList)

    const sideDrawerItems = getSideDrawerItems(menuItems)
    const drawerList = Object.values(sideDrawerItems)
    setDrawerItemsState(drawerList)
  }, [menuItems])

  const handleDrawerState = state => {
    setDrawerState(state)
  }

  return (
    <>
      <S.Header>
        <S.LogoLink to="/">
          <S.Logo src={logoWhite} alt="Mavennet logo" />
        </S.LogoLink>
        <S.Navbar></S.Navbar>
        <Hamburguer handleClick={handleDrawerState} />
      </S.Header>
      <SideDrawer
        menuItems={drawerItemsState}
        isOpen={isDrawerOpen}
        closeDrawer={() => handleDrawerState(false)}
      />
    </>
  )
}

export default Header
