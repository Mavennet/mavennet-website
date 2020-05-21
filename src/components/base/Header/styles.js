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

export const ListItem = styled.li`
  display: inline-block;
`

export const NavLink = styled(Link)`
  color: ${props => props.theme.color};

  margin: 0 1em;

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
`

export const DropdownList = styled.ul`
  display: none;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  padding: 1em 0;
  min-width: max-content;
`

export const DropdownListItem = styled.li`
  padding: 0.5em 0;
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
`

export const ButtonContainer = styled.div`
  margin-left: 2em;
`
