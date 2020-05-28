import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const FeaturesSection = styled.section`
  padding: 5em 0;
  overflow-x: hidden;
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;

  @media ${device.desktop} {
    font-size: 3rem;
    font-weight: bold;
    line-height: 58px;
    text-align: center;
  }
`

export const FeatureList = styled.ul`
  margin-top: 4.875em;
`

export const FeatureItem = styled.li`
  @media ${device.desktop} {
    margin-top: 5em;
  }
`
