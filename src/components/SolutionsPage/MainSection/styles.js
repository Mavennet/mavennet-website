import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled.section`
  text-align: left;
  color: #ffffff;

  padding-top: 10.75em;
  padding-bottom: 24em;

  position: relative;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${device.laptop} {
    padding-bottom: 16em;
  }

  @media ${device.laptopL} {
    padding-bottom: 32em;
  }
`

export const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: -0.13px;
  line-height: 48px;

  @media ${device.laptop} {
    font-size: 2.875rem;
    font-weight: bold;
    letter-spacing: -0.16px;
    line-height: 58px;
  }
`

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.08px;
  line-height: 29px;

  margin-top: 2.3em;

  @media ${device.laptop} {
    font-size: 2.25rem;
    font-weight: 600;
    letter-spacing: -0.11px;
    line-height: 41px;

    margin-top: 0.89em;
  }
`
