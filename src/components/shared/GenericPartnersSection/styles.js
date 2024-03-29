import styled from "styled-components"

import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const GenericPartnersSection = styled.section`
  padding: 21px 0 114px;
  position: relative;

  @media ${device.laptop} {
    padding: 65px 0 72px;
  }
`

export const PartnersContainer = styled(Container)`
  width: 95%;
`

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 0.25px;
  line-height: 56px;
  text-align: center;

  margin: 0 auto;
  max-width: 80%;

  @media ${device.laptop} {
    font-size: 48px;
    line-height: 58px;
    text-align: left;

    margin: 0;
  }
`

export const PartnersList = styled.ul`
  width: 100%;
  margin-top: 3.4375em;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`

export const PartnersItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 45%;
  margin: 1.625em 1.5%;

  @media ${device.tablet} {
    width: auto;
    max-width: 200px;
    margin: 0 42px 56px 0;
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
