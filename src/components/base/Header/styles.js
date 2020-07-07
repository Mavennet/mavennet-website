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

  @media (min-width: 1080px) {
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

  transition: ease-in-out 0.2s color;

  &.active {
    border-bottom: 2px solid ${props => props.theme.color};
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
    border-bottom: 2px solid ${props => props.theme.color};
  }
`

export const DropdownList = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: max-content;
  padding: 12.5px 0;

  ${NavLink} {
    padding-bottom: 0;
    margin-top: 0;
  }
`

export const DropdownListItem = styled.li`
  position: relative;
  width: 100%;

  transition: ease-in-out 0.2s background-color;

  &:hover {
    background-color: var(--c-p-royal-purple);

    ${NavLink} {
      color: white;
    }
  }

  & ${NavLink} {
    box-sizing: border-box;
    color: var(--c-p-haiti);
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 12.5px 60px 12.5px 18px;
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
