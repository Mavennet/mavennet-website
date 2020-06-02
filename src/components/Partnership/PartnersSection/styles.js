import styled from "styled-components"

import Container from "../../base/Container"
import GenericPartnersSection from "../../shared/GenericPartnersSection"

import { device } from "../../../consts/deviceSizes"

export const PartnersSection = styled.section`
  @media ${device.laptop} {
    padding: 4.125em 0;
  }
`

export const PartnersContainer = styled(Container)`
  padding: 4.125em 0;
`

export const MobilePartnersSection = styled(GenericPartnersSection)`
  padding-top: 0;
`
