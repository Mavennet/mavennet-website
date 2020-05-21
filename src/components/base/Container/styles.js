import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const Container = styled.div`
  width: 85%;
  max-width: 1250px;
  margin: 0 auto;

  ${({ center }) =>
    center &&
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}

  @media ${device.laptop} {
    width: 83%;
  }
`
