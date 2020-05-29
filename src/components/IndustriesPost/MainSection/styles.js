import styled from "styled-components"

import Container from "../../base/Container"
import GenericMainSection from "../../shared/GenericMainSection"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled(GenericMainSection)`
  color: #ffffff;
  text-align: left;

  padding-top: 9em;

  @media ${device.laptopL} {
    padding: 13em 0;
  }
`

export const MainSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column-reverse;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const TextContent = styled.div`
  margin-top: 3.4375em;

  @media ${device.tablet} {
    width: 70%;

    margin-top: 0;
  }

  @media ${device.laptop} {
    width: 50%;
  }
`

export const Industy = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 29px;
`

export const Description = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;

  margin-top: 0.5em;

  @media ${device.laptop} {
    font-size: 3rem;
    font-weight: bold;
    line-height: 58px;
  }
`

export const ImageContainer = styled.div``

export const Image = styled.img`
  display: block;
  width: 100%;

  @media ${device.tablet} {
    max-width: 300px;
  }

  @media ${device.laptop} {
    max-width: 370px;
  }

  @media ${device.desktop} {
    max-width: 450px;
  }
`
