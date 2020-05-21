import styled from "styled-components"
import { Link } from "gatsby"

export const Header = styled.header`
  z-index: 100;
  position: ${props => props.theme.position};
  top: 0;
  right: 0;
  left: 0;
  padding: 20px 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.background};
  box-shadow: ${props => props.theme.boxShadow};

  transition: 0.2s;
`

export const LogoLink = styled(Link)``

export const Logo = styled.img`
  width: 158px;
  display: block;
`

export const Navbar = styled.nav`
  display: none;
`

export const NavList = styled.ul``

export const ListItem = styled.li``

export const NavLink = styled(Link)``

export const DropdownWrapper = styled.div``

export const DropdownList = styled.ul``
