import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const NavigationMenu = ({ menuItems, scrollTo }) => {
  const getMenuItems = items => {
    return (
      <S.MenuList>
        {items.map(menuItem => (
          <S.ListItem>
            <S.MenuItem onClick={() => scrollTo(menuItem.reference)}>
              {menuItem.text}
            </S.MenuItem>
          </S.ListItem>
        ))}
      </S.MenuList>
    )
  }

  return (
    <S.NavigationMenu>
      <Container>{getMenuItems(menuItems)}</Container>
    </S.NavigationMenu>
  )
}

export default NavigationMenu
