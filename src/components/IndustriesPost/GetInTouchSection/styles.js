import styled from "styled-components"

import Button from "../../shared/Button"
import { device } from "../../../consts/deviceSizes"

export const GetInTouchSection = styled.section`
  padding: 4.375em 0;

  max-width: 988px;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 2.5em;
  }
`
export const CTAButton = styled(Button)`
  margin-top: 2.5em;
`
