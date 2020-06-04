import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const ContactUsSection = styled.section`
  padding-bottom: 3.125em;

  @media ${device.tablet} {
    padding-bottom: 5.125em;
  }
`

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 24px;

  @media ${device.laptop} {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 29px;
  }
`

export const Content = styled.p`
  font-size: 1rem;
  line-height: 27px;
  font-weight: 400;

  margin-top: 1em;
`
