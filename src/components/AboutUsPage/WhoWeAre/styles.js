import styled from "styled-components"

import TextArrowCTA from "../../shared/TextArrowCTA"

import { device } from "../../../consts/deviceSizes"

export const WhoWeAre = styled.section`
  @media ${device.laptop} {
    padding: 4.375em 0;
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;

  @media ${device.laptop} {
    font-size: 3rem;
    line-height: 58px;
    text-align: center;
  }
`

export const SubTitle = styled.h3`
  font-size: 2.125rem;
  font-weight: 500;
  line-height: 41px;
  text-align: center;

  margin-top: 0.6em;

  @media ${device.laptop} {
    margin-top: 1.4em;
    font-weight: 600;
  }
`

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 29px;

  margin-top: 2em;

  @media ${device.laptop} {
    font-size: 1rem;
    line-height: 41px;
    margin-top: 1.875em;
    text-align: center;
  }
`

export const CTA = styled(TextArrowCTA)`
  font-size: 1.5rem !important;

  margin-top: 1.875em;
`
