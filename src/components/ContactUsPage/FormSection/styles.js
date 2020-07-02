import styled from "styled-components"
import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const FormSection = styled.main``

export const FormSectionContainer = styled(Container)`
  padding: 2.635em 0 8.125em;
  max-width: 541px;
`

export const ContactUsText = styled.p`
  font-size: 16px;
  line-height: 27px;
  text-align: center;
  color: var(--c-p-haiti);

  @media ${device.laptop} {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 34px;
  }
`
