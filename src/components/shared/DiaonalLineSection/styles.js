import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const DiagonalLineSection = styled.img`
  display: none;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  ${({ flip }) =>
    flip &&
    `
      transform: scaleX(-1);
  `}

  @media ${device.laptop} {
    display: block;
  }
`
