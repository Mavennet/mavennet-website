import styled from "styled-components"

import GenericMainSection from "../../shared/GenericMainSection"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled(GenericMainSection)`
  padding: 12.1875em 0 10.875em;

  @media ${device.laptop} {
    padding: 11.6875em 0 13.375em;
  }
`

export const Slogan = styled.h1`
  color: #ffffff;
`

export const Subtitle = styled.p`
  color: white;

  margin: 1em auto 0;
  max-width: 790px;
`

export const ButtonContainer = styled.div`
  margin-top: 3.875em;
`
