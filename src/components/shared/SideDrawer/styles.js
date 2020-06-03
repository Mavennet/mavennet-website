import styled from "styled-components"

import { Link } from "gatsby"

export const SideDrawer = styled.aside`
  overflow-y: scroll;
  min-height: -webkit-fill-available;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 200;
  background-color: #ffffff;
  transition: transform 0.3s ease-out;
  transform: ${props => (props.isOpen ? "translateX(0)" : "translateX(100%)")};

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Container = styled.div`
  padding: 23px 30px 42px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 13px;

  border-bottom: 1px solid var(--c-p-selago-dark);
`

export const Logo = styled.img`
  width: 160px;
`

export const CloseButton = styled.button`
  height: 21px;
  width: 21px;
  position: relative;
  background: none;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    left: 9px;
    top: 0px;
    content: " ";
    height: 21px;
    width: 3px;
    background-color: var(--c-p-haiti);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`
export const NavBar = styled.nav`
  padding-top: 27px;
`

export const NavList = styled.ul``

export const NavItem = styled.li`
  border-bottom: 1px solid var(--c-p-selago-dark);
  padding: 1.25em 0;
`

export const NavLink = styled(Link)`
  color: var(--c-p-haiti);
  font-family: Barlow;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 29px;

  width: 100%;
  height: 100%;

  padding: 0 0.33em;
`
export const ButtonContainer = styled.div`
  width: auto;
  margin: 4em auto 0;
`
