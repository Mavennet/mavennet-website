import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const SolutionsSection = styled.main`
  margin-top: -15em;
  padding-bottom: 5em;

  @media ${device.laptop} {
    margin-top: -4em;
  }

  @media ${device.laptopL} {
    margin-top: -9em;
  }
`

export const SolutionSection = styled.section``
