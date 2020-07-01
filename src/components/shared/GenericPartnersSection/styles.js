import styled from "styled-components"

import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const GenericPartnersSection = styled.section`
  padding: 21px 0 114px;

  background-color: var(--c-p-selago);

  @media ${device.laptop} {
    transform: skewY(-5deg);

    padding: 65px 0 125px;

    background-color: var(--c-p-selago-dark);
  }
`

export const PartnersContainer = styled(Container)`
  width: 95%;

  @media ${device.laptop} {
    transform: skewY(5deg);
  }
`

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 0.25px;
  line-height: 56px;
  text-align: center;

  max-width: 80%;

  @media ${device.laptop} {
    font-size: 48px;
    line-height: 58px;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;

  width: 45%;
  margin: 1.625em 1.5%;

  @media ${device.tablet} {
    width: 100%;
    max-width: 200px;
    max-height: 60px;
    margin: 1.625em 1em 2em;
  }
`

export const PartnerImage = styled.img`
  display: block;

  max-width: 100%;
  height: auto;
  max-height: 70px;
`

export const CTAContainer = styled.div`
  margin-top: 2em;
`
