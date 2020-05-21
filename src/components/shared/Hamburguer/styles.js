import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const Hamburguer = styled.div`
  width: 30px;
  cursor: pointer;

  @media ${device.laptop} {
    display: none;
  }
`

export const Bar = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${props => props.theme.color};
  margin: 5px 0;
`
