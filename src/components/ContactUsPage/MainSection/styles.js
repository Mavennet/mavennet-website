import styled from "styled-components"

import GenericMainSection from "../../shared/GenericMainSection"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled(GenericMainSection)`
  color: #ffffff;
  text-align: left;

  padding-top: 8em;
  padding-bottom: 7em;

  @media ${device.tablet} {
    padding-bottom: 10em;
  }

  @media ${device.laptop} {
    padding-top: 10em;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;
  text-align: center;
`

export const InfoList = styled.ul`
  margin-top: 2.9375em;
  @media ${device.tablet} {
    margin: 3em auto 0;
    max-width: 900px;

    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
`

export const Column = styled.ul``

export const InfoItem = styled.li`
  margin-top: 2em;

  @media ${device.tablet} {
    height: 50%;
  }
`

export const ItemTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 29px;
`

export const ItemDescription = styled.p`
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 27px;
  font-weight: 400;

  margin-top: 1em;
`

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 1em;
`

export const SocialItem = styled.li`
  display: inline-block;
  margin-right: 0.5em;
`
