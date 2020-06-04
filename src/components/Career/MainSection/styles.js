import styled from "styled-components"

import Container from "../../base/Container"
import GenericMainSection from "../../shared/GenericMainSection"
import Button from "../../shared/Button"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled(GenericMainSection)`
  padding: 13.125em 0 9em;

  @media ${device.laptop} {
    padding: 1.6875em 0 6em;
  }
  @media ${device.laptopL} {
    overflow: visible;
    padding: 1.6875em 0 12em;
  }
`

export const MainSectionContainer = styled(Container)`
  position: relative;
  @media ${device.laptop} {
    display: flex;
    justify-content: flex-end;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;

  @media ${device.laptop} {
    width: 60%;
    position: absolute;
    z-index: 2;
    top: 8em;
    left: 0;
  }
`

export const TextContent = styled.div`
  text-align: center;
  color: #ffffff;

  margin-top: 2.625em;

  @media ${device.laptop} {
    margin-top: 8.625em;
    text-align: left;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;

  @media ${device.laptop} {
    font-size: 3rem;
    line-height: 58px;
  }
`

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 29px;

  margin-top: 1.125em;

  @media ${device.laptop} {
    margin-top: 1.16em;
  }
`

export const CTA = styled(Button)`
  margin-top: 3.5625em;

  @media ${device.laptop} {
    margin-top: 2.6875em;
  }
`
