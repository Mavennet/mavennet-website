import styled from "styled-components"

export const SideDrawer = styled.aside`
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 200;
  background-color: #ffffff;
  transition: transform 0.3s ease-out;
  transform: ${props => (props.isOpen ? "translateX(0)" : "translateX(100%)")};
`

export const Container = styled.div`
  padding: 23px 30px 0px 42px;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 160px;
`

export const CloseButton = styled.button`
  height: 21px;
  width: 21px;
  position: relative;
  background: none;

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
