import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled.section`
  text-align: center;
  color: #ffffff;

  padding-top: 10.75em;
  padding-bottom: 24em;

  position: relative;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  ${({ parallaxActive }) =>
    parallaxActive &&
    `
    background-attachment: fixed;
  `}

  @media ${device.laptop} {
    padding-bottom: 16em;
  }

  @media ${device.laptopL} {
    padding-bottom: 24em;
  }
`

export const Title = styled.h1`
  color: #ffffff;
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;

  @media ${device.laptop} {
    font-size: 48px;
    letter-spacing: 0;
    line-height: 64px;
  }
`

export const Description = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;

  margin-top: 2.3em;

  max-width: 730px;

  @media ${device.laptop} {
    letter-spacing: 0;
    line-height: 34px;

    margin-top: 20px;
  }
`
