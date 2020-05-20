import styled from "styled-components"
import { Link } from "gatsby"

export const Header = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 20px 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LogoLink = styled(Link)``

export const Logo = styled.div`
  background-color: black;
  width: 158px;
  height: 38px;
`

export const Navbar = styled.nav`
  display: none;
`

export const NavList = styled.ul``

export const ListItem = styled.li``

export const NavLink = styled(Link)``

export const DropdownWrapper = styled.div``

export const DropdownList = styled.ul``
