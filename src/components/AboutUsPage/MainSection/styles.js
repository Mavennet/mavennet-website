import styled from "styled-components"

import GenericMainSection from "../../shared/GenericMainSection"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled(GenericMainSection)`
  color: #ffffff;
  text-align: left;

  padding: 214px 0 220px;

  @media ${device.laptop} {
    padding: 215px 0 311px;
  }
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  line-height: 56px;
  text-align: center;
  max-width: 956px;

  @media ${device.laptop} {
    font-size: 48px;
    letter-spacing: 0;
    line-height: 64px;
  }
`
