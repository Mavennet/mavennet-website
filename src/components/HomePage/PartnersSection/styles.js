import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const PartnersSection = styled.section`
  padding: 4.0625em 0 2.1875em;
`

export const Title = styled.h2`
  text-align: center;
`

export const PartnersList = styled.ul`
  width: 100%;
  margin-top: 3.4375em;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

export const PartnersItem = styled.li`
  margin: 1.625em 1em 0;

  width: 80px;

  @media ${device.tablet} {
    width: 100px;
  }

  @media ${device.laptop} {
    width: 160px;
  }
`

export const PartnerLink = styled.a``

export const PartnerImage = styled.img`
  display: block;

  width: 100%;
`

export const CTAContainer = styled.div`
  margin-top: 2em;
`
