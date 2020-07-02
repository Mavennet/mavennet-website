import styled from "styled-components"

import Button from "../../shared/Button"
import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const DemoSection = styled.section`
  @media ${device.laptop} {
    display: flex;
  }
`

export const Image = styled.img`
  width: 100%;
  display: block;

  @media ${device.laptop} {
    width: 60%;

    object-fit: cover;
  }
`

export const TextContent = styled.div`
  background-color: var(--c-p-selago-dark);

  display: flex;
  align-items: center;

  ${({ textOnly }) =>
    textOnly &&
    `
    width: 100%;
    padding: 5.25em 0 !important;
    text-align: left;
  `}

  padding: 4.625em 2em;

  @media ${device.desktop} {
    padding: 9.625em 17.72em 9.625em 8.75em;
  }
`

export const Title = styled.h3`
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 2.5rem;
    max-width: 400px;
    text-align: left;
  }
`

export const DemoButton = styled(Button)`
  margin-top: 2.625em;
  @media ${device.desktop} {
    margin-top: 3.625em;
  }
`

export const SectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    display: block;
  }
`
