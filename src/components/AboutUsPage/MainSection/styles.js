import styled from "styled-components"

import GenericMainSection from "../../shared/GenericMainSection"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled(GenericMainSection)`
  color: #ffffff;
  text-align: left;

  padding: 7.1875em 0 17.0625em;

  @media ${device.laptop} {
    padding: 10.1875em 0 16.875em;
  }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 29px;
`

export const Description = styled.p`
  font-size: 2.5rem;
  line-height: 48px;

  margin-top: 0.875em;
  max-width: 700px;

  @media ${device.laptop} {
    font-size: 3rem;
    line-height: 58px;

    margin-top: 0.3em;
  }
`
