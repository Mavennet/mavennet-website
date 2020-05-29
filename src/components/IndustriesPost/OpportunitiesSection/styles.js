import styled from "styled-components"

import GenericMainSection from "../../shared/GenericMainSection"

import { device } from "../../../consts/deviceSizes"

export const OpportunitiesSection = styled.section`
  text-align: center;

  @media ${device.tablet} {
    padding: 3em 0;
  }

  @media ${device.desktop} {
    padding: 6em 0 10em;
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;
  text-align: center;
`

export const OpportunitiesList = styled.ul`
  margin-top: 3.75em;
  width: 100%;
  max-width: 950px;
  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const OpportunityItem = styled.li`
  max-width: 180px;
  margin: 0 auto;

  &:not(:first-child) {
    margin-top: 3.75em;
  }

  @media ${device.laptop} {
    margin-top: 0 !important;
    max-width: 225px;
  }
`
