import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const ExploreSection = styled.section`
  padding: 6em 0;
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;
  text-align: center;
`

export const SliderWrapper = styled.div`
  width: 100%;

  margin-top: 2.4375em;

  @media ${device.laptop} {
    padding: 3.5em;
  }
`

export const ItemContainer = styled.div`
  margin: 0 auto;

  @media ${device.desktop} {
    padding: 0 4em;
  }
`

export const CustomDot = styled.div`
  width: 11px;
  height: 11px;

  border-radius: 50%;
  background-color: var(--c-p-selago);
`
