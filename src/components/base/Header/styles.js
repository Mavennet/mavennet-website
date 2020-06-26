import styled from "styled-components"
import { Link } from "gatsby"

import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const Header = styled.header`
  z-index: 100;
  position: ${props => props.theme.position};
  top: 0;
  right: 0;
  left: 0;
  padding: 20px 0;

  background-color: ${props => props.theme.background};
  box-shadow: ${props => props.theme.boxShadow};

  transition: 0.2s;
`

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LogoLink = styled(Link)``

export const Logo = styled.img`
  width: 158px;
  display: block;
`

export const Navbar = styled.nav`
  display: none;

  @media ${device.laptop} {
    display: flex;
    align-items: center;
  }
`

export const NavList = styled.ul``

export const NavLink = styled(Link)`
  color: ${props => props.theme.color};
  padding-bottom: 0.2em;
  margin-top: 0.2em;
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom: 2px solid white;
  }

  ${({ header }) =>
    header &&
    `
      display:flex;
      align-items: center;

      svg {
        width: 12px;
        margin-left: .3em;
        margin-top: 3px;
      }
    `}

  @media ${device.laptop} {
    margin: 0 .8em;
  }

  @media (max-width: '1048px') {
    margin: 0 1em;
  }
`

export const ListItem = styled.li`
  display: inline-block;

  & > ${NavLink}:hover {
    border-bottom: 2px solid white;
  }
`

export const DropdownList = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  padding: 1.2em 0.5em;
  min-width: max-content;

  ${NavLink} {
    padding-bottom: 0;
    margin-top: 0;
  }
`

export const DropdownListItem = styled.li`
  padding: 0.8em 0;
  position: relative;
  width: 100%;

  & ${NavLink} {
    color: var(--c-p-haiti);
  }
`

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownList} {
    display: block;
  }

  & > ${NavLink} {
    padding-bottom: 0.2em;
    margin-top: 0.2em;
  }
`

export const ButtonContainer = styled.div`
  margin-left: 2em;
`
