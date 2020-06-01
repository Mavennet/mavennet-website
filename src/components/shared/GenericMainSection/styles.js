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

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: -1px;
    width: 0%;
    border-bottom: 95px solid white;
  }

  &:before {
    left: 0;
    border-right: 400px solid transparent;

    @media ${device.tablet} {
      border-right: 50vw solid transparent;
    }
  }

  &:after {
    right: 0;
    border-left: 400px solid transparent;

    @media ${device.tablet} {
      border-left: 50vw solid transparent;
    }
  }
`
