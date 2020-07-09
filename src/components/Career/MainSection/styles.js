import styled from "styled-components"

import Container from "../../base/Container"
import GenericMainSection from "../../shared/GenericMainSection"
import Button from "../../shared/Button"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled(GenericMainSection)`
  padding: 13.125em 0 9em;

  /* @media ${device.laptop} {
    padding: 1.6875em 0 6em;
  } */
  @media ${device.laptopL} {
    overflow: visible;
    padding: 279px 0 230px;
  }

  @media ${device.desktop} {
    padding: 329px 0 400px;
  }
`

export const MainSectionContainer = styled(Container)``

export const TextContent = styled.div`
  text-align: center;
  color: #ffffff;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  line-height: 56px;

  @media ${device.laptop} {
    font-size: 48px;
    line-height: 58px;
  }
`

export const Description = styled.p`
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  margin-top: 1.125em;

  @media ${device.laptop} {
    margin-top: 1.16em;
  }
`

export const CTA = styled(Button)`
  margin-top: 3.5625em;

  @media ${device.laptop} {
    margin-top: 2.6875em;
  }
`
