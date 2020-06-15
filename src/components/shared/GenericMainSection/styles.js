import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const GenericMainSection = styled.section`
  position: relative;
  padding: 13.5625em 0;
  ${({ background }) =>
    background &&
    `
    background-image: url(${background});
  `}

  ${({ backgroundColor }) =>
    backgroundColor &&
    `
    background-color: var(${backgroundColor});
  `}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  width: 100%;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  @media ${device.laptopL} {
    padding: 17em 0;
  }

  @media ${device.desktop} {
    padding: 20em 0;
  }
`
export const DividerWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -2px;
`
