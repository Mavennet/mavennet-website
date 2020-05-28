import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const IndustriesSection = styled.main`
  padding: 2.9375em 0;

  @media ${device.laptop} {
    padding: 4.9375em 0 8.9375em;
  }
`

export const IndustriesList = styled.ul``

export const IndustryListItem = styled.li`
  &:not(:first-child) {
    margin-top: 7.5em;
  }
`
