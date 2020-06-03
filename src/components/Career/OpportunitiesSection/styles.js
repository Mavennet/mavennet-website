import styled from "styled-components"

import Container from "../../base/Container"
import { device } from "../../../consts/deviceSizes"

export const OpportunitiesSection = styled.section`
  padding: 3.125em 0;

  @media ${device.tablet} {
    padding: 5.125em 0;
  }
`

export const SectionContainer = styled(Container)`
  width: 100%;

  @media ${device.laptop} {
    width: 85%;
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;
  text-align: center;

  margin: 0 auto;

  max-width: 85%;
`

export const TableWrapper = styled.div`
  margin-top: 3.75em;
`
