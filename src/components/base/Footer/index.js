import React, { useEffect, useState } from "react"

import SocialNetLink from "../../shared/SocialNetLink"
import Container from "../../base/Container"

import { getFooterItems } from "../../../helpers/menuItems"

import logoWhite from "../../../assets/images/logo_white.svg"

import * as S from "./styles"

const Footer = ({ menuItems }) => {
  const { metaData } = menuItems

  const [footerItemsState, setFooterItemsState] = useState([])

  useEffect(() => {
    const footerItems = getFooterItems(menuItems)
    const footerList = Object.values(footerItems)
    setFooterItemsState(footerList)
  }, [menuItems])

  const getSocialList = socialList => {
    return (
      <S.SocialList>
        {Object.entries(socialList).map(([key, value]) => (
          <S.SocialItem key={key}>
            <SocialNetLink socialNetwork={key} userTag={value} />
          </S.SocialItem>
        ))}
      </S.SocialList>
    )
  }

  const getGroupList = items => {
    return (
      <S.GroupList>
        {items.map(item => (
          <S.GroupListItem key={item.name}>
            <S.GroupItem to={item.to}>{item.name}</S.GroupItem>
          </S.GroupListItem>
        ))}
      </S.GroupList>
    )
  }

  const getNavigationGroups = groups => {
    return (
      <S.NavigationContainer>
        {groups.map(group => {
          const [main, ...items] = group.children
          return (
            <S.NavigationGroups key={main.name}>
              <S.GroupMain to={main.to}>{main.name}</S.GroupMain>
              {getGroupList(items)}
            </S.NavigationGroups>
          )
        })}
      </S.NavigationContainer>
    )
  }

  return (
    <S.Footer>
      <Container>
        <S.Header>
          <S.LogoLink to="/">
            <S.Logo src={logoWhite} />
          </S.LogoLink>
          {getSocialList(metaData.siteMetadata.social)}
        </S.Header>
        {getNavigationGroups(footerItemsState)}

        <S.Copyright>
          &copy;{new Date().getFullYear()} {metaData.siteMetadata.companyName}.
          All rights reserved.
        </S.Copyright>
      </Container>
    </S.Footer>
  )
}

export default Footer
