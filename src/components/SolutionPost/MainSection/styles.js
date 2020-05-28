import styled from "styled-components"

import GenericMainSection from "../../shared/GenericMainSection"
import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled(GenericMainSection)`
  color: #ffffff;

  padding-top: 9em;

  @media ${device.laptopL} {
    padding: 13em 0;
  }
`

export const MainSectionContainer = styled(Container)`
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;

  @media ${device.tablet} {
    max-width: 300px;
  }

  @media ${device.laptop} {
    max-width: 400px;
  }

  @media ${device.laptopL} {
    max-width: 645px;
  }
`

export const Content = styled.div`
  margin-top: 2em;
  padding: 0 1em;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.tablet} {
    width: 40%;
  }
`

export const Logo = styled.img`
  width: 80%;
  max-width: 240px;
`

export const Title = styled.h1`
  text-align: left;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;

  margin-top: 0.5em;

  @media ${device.laptopL} {
    font-size: 3rem;
    margin-top: 0.83em;
  }
`
