import { Link } from "gatsby"
import styled from "styled-components"

import Container from "../Container"

import { device } from "../../../consts/deviceSizes"

export const Footer = styled.footer`
  position: relative;
  background-color: var(--c-p-haiti);

  padding: 2.5em 0;

  &:after {
    content: "";
    position: absolute;
    width: 90%;
    top: 0;
    right: 5%;
    height: 0.5px;
    background-color: var(--c-s-rum);
  }

  @media ${device.laptop} {
    padding: 3.5em 0;
  }
`

export const FooterContainer = styled(Container)``

export const Row = styled.div`
  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    margin-right: 4em;
  }
`

export const LogoLink = styled(Link)``

export const Logo = styled.img`
  display: block;
  width: 158px;
`

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  @media ${device.laptop} {
    margin-top: 2.5em;
  }
`

export const SocialItem = styled.li`
  display: inline-block;
  margin-left: 0.5em;
`

export const Copyright = styled.small`
  color: var(--c-p-light-grey);

  display: inline-block;
  margin-top: 6em;
`
export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media ${device.laptop} {
    flex: 0.8;
  }
`

export const NavigationGroups = styled.nav`
  width: 50%;

  margin-top: 3.5em;

  @media ${device.laptop} {
    width: auto;
    margin-top: 0;
  }
`

export const GroupList = styled.ul`
  margin-top: 1.875em;
`

export const GroupListItem = styled.li`
  margin-top: 1.4375em;
`

export const GroupMain = styled(Link)`
  color: #ffffff;
  font-weight: 600;
  line-height: 19px;
  text-align: center;
`

export const GroupItem = styled(Link)`
  color: #ffffff;
  font-weight: 400;
  font-size: 0.875em;
  line-height: 17px;
`
