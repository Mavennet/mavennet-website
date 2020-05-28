import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const CheckIconText = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 24px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`

export const CheckIcon = styled.img`
  width: 35px;

  margin-right: 1.45em;
`
