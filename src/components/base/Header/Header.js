import React, { useState, useEffect, useContext } from "react"
import { ThemeProvider } from "styled-components"

import { StoreContext } from "../../../utils/store"

import Button from "../../shared/Button"
import Hamburguer from "../../shared/Hamburguer/Hamburger"
import SideDrawer from "../../shared/SideDrawer/SideDrawer"

import { getHeaderItems, getSideDrawerItems } from "../../../helpers/menuItems"

import themes from "./themes"
import * as S from "./styles"

const Header = ({ menuItems }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.primary)

  const [menuItemsState, setMenuItemsState] = useState([])
  const [drawerItemsState, setDrawerItemsState] = useState([])

  const [isDrawerOpen, setDrawerState] = useState(false)

  const { drawerMenu } = useContext(StoreContext)
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = drawerMenu

  useEffect(() => {
    window.addEventListener("scroll", checkScroll)
    return () => {
      window.removeEventListener("scroll", checkScroll)
    }
  })

  useEffect(() => {
    const headerItems = getHeaderItems(menuItems)
    const headerList = Object.values(headerItems)
    setMenuItemsState(headerList)

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
    setIsDrawerMenuOpen(state)
  }

  const getDropdown = item => {
    return (
      <S.DropdownWrapper>
        <S.NavLink
          to={item.to}
          header={1}
          activeClassName="active"
          partiallyActive={true}
        >
          {item.name}
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-down"
            className="svg-inline--fa fa-chevron-down fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill={currentTheme.color}
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            ></path>
          </svg>
        </S.NavLink>
        <S.DropdownList>
          {item.children.map(child => (
            <S.DropdownListItem key={child.name}>
              <S.NavLink to={child.to}>{child.name}</S.NavLink>
            </S.DropdownListItem>
          ))}
        </S.DropdownList>
      </S.DropdownWrapper>
    )
  }

  const getNavList = items => {
    return (
      <S.NavList>
        {items.map(item => (
          <S.ListItem key={item.name}>
            {item.children.length > 0 ? (
              getDropdown(item)
            ) : (
              <S.NavLink to={item.to} activeClassName="active">
                {item.name}
              </S.NavLink>
            )}
          </S.ListItem>
        ))}
      </S.NavList>
    )
  }

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <S.Header>
          <S.HeaderContainer>
            <S.LogoLink to="/">
              <S.Logo src={currentTheme.logo} alt="Mavennet logo" />
            </S.LogoLink>
            <S.Navbar>
              {getNavList(menuItemsState)}
              <S.ButtonContainer>
                <Button text="Get in Touch" to="/contact-us" />
              </S.ButtonContainer>
            </S.Navbar>
            <Hamburguer handleClick={handleDrawerState} />
          </S.HeaderContainer>
        </S.Header>
      </ThemeProvider>
      <SideDrawer
        menuItems={drawerItemsState}
        isOpen={isDrawerOpen}
        closeDrawer={() => handleDrawerState(false)}
      />
    </>
  )
}

export default Header
