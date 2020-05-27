import styled from "styled-components"

import Container from "../../base/Container"
import Button from "../../shared/Button"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled.section`
  height: 100vh;
  width: 100vw;

  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`

export const SectionContainer = styled(Container)`
  height: 100%;
  color: #ffffff;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 5.625rem;
  font-weight: 600;
  line-height: 168px;

  @media ${device.laptop} {
    font-size: 8.75rem;
  }
`

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 29px;

  @media ${device.laptop} {
    font-size: 2.125rem;
  }
`

export const HomeButton = styled(Button)`
  margin-top: 2.5em;

  @media ${device.laptop} {
    margin-top: 2.5625em;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 750px;

  margin-top: 2.1875em;

  @media ${device.laptop} {
    margin-top: -2em;
  }
`
