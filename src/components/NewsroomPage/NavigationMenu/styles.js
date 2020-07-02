import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const NavigationMenu = styled.nav`
  color: var(--c-p-royal-purple);

  padding: 3em 0;
`

export const MenuList = styled.ul``

export const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 0.83em;
  }

  @media ${device.laptop} {
    display: inline-block;
    margin-top: 0;

    &:not(:last-child) {
      margin-right: 2.5em;
    }
  }
`

export const MenuItem = styled.p`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 34px;
  color: var(--c-p-haiti);

  cursor: pointer;
`
