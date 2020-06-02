import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const WhySection = styled.section`
  padding: 6.125em 0;
`
export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 58px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 3rem;
  }
`

export const BenefitsList = styled.ul`
  margin-top: 3em;

  @media ${device.laptop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const ListItem = styled.li`
  margin-top: 2em;

  @media ${device.laptop} {
    width: 49%;
  }

  @media ${device.desktop} {
    width: 45%;
    margin-top: 3em;
  }
`
