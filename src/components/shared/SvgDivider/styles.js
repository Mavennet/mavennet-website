import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const SvgDivider = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: ${({ bottom }) => bottom || "unset"};
  top: ${({ top }) => top || "unset"};

  ${({ flatMobile }) =>
    flatMobile &&
    `
    display: none;
  `}


  @media ${device.laptop} {
    display: block;
  }

`
