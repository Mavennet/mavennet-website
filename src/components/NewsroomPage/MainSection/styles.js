import styled from "styled-components"

import Container from "../../base/Container"
import GenericMainSection from "../../shared/GenericMainSection"
import TextArrowCTA from "../../shared/TextArrowCTA"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled(GenericMainSection)`
  color: #ffffff;

  padding: 7.25em 0 9.25em;

  @media ${device.laptop} {
    padding: 9.25em 0 9.25em;
  }
`

export const MainSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column-reverse;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const TextContent = styled.div`
  text-align: left;

  margin-top: 2.2em;

  @media ${device.laptop} {
    width: 45%;

    margin-top: 0;
  }

  @media ${device.desktop} {
    width: 35%;
  }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 29px;
`

export const FeaturedTitle = styled.h2`
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;

  margin-top: 0.6em;

  @media ${device.desktop} {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 48px;
  }
`

export const CTA = styled(TextArrowCTA)`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;

  margin-top: 1em;
  width: fit-content;
  color: #ffffff;

  @media ${device.desktop} {
    margin-top: 1.875em;
  }
`

export const ImageWrapper = styled.div`
  z-index: 4;
  display: flex;
  align-items: center;


  @media ${device.laptop} {
    margin-right: -3em;
  }

  @media ${device.desktop} {
    width: 50%;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 400px;

  margin: 0 auto;

  @media ${device.laptop} {
    max-width: 450px;
  }

  @media ${device.desktop} {
    max-width: 600px;
  }
`
