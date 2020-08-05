import styled from "styled-components"

import GenericMainSection from "../../shared/GenericMainSection"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled(GenericMainSection)`
  text-align: left;
  color: #ffffff;

  padding-top: 8em;

  @media ${device.laptop} {
    padding-top: 11em;
  }
`

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 29px;

  @media ${device.laptop} {
    display: none;
  }
`

export const Subtitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;

  margin-top: 1em;

  max-width: 950px;

  @media ${device.laptop} {
    font-size: 3rem;
    font-weight: bold;
    line-height: 64px;
    text-align: center;

    margin: 0 auto;
  }
`
