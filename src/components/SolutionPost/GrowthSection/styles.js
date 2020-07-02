import styled from "styled-components"

import Container from "../../base/Container"
import { device } from "../../../consts/deviceSizes"

export const GrowthSection = styled.section`
  padding-bottom: 5em;

  @media ${device.laptopL} {
    padding-top: 5em;
  }
`

export const GrowthContainer = styled(Container)`
  @media ${device.laptopL} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const NumbersList = styled.ul`
  @media ${device.tablet} {
    display: flex;
  }
  @media ${device.laptopL} {
    margin-top: 0;
    width: 50%;
  }
`

export const NumberItem = styled.li`
  width: 100%;
  margin: 2em auto 0;

  max-width: 210px;

  @media ${device.desktop} {
    margin-top: 0;
  }
`

export const TextContent = styled.div`
  margin-top: 3em;

  @media ${device.laptopL} {
    margin-top: 0;
    width: 44%;
  }
`

export const Title = styled.h2`
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;

  @media ${device.desktop} {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 48px;
  }
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 27px;

  margin-top: 1.5em;
`
