import styled from "styled-components"

import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const TestimonialSection = styled.section`
  padding: 3.125em 0;
  overflow: hidden;

  @media ${device.tablet} {
    padding: 5.125em 0;
  }
`

export const SectionContainer = styled(Container)`
  width: 100%;

  @media ${device.tablet} {
    width: 85%;
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;

  text-align: center;

  @media ${device.laptop} {
    font-size: 3rem;
    line-height: 58px;
  }
`

export const SliderWrapper = styled.div`
  margin-top: 3.75em;

  @media ${device.laptop} {
    margin: 4.1875em auto 0;
  }

  @media ${device.laptopL} {
    width: 85%;
  }
`

export const Arrow = styled.div`
  display: none !important;

  width: 0 !important;
  height: 0 !important;
  border-top: 24px solid transparent !important;
  border-bottom: 24px solid transparent !important;

  ${({ isNext }) =>
    isNext
      ? `
      border-left: 28px solid var(--c-p-royal-purple) !important;
      right: -64px !important; `
      : `
      border-right: 28px solid var(--c-p-royal-purple) !important;
      left: -64px !important; `}

  &::before {
    display: none;
  }

  @media ${device.laptopL} {
    display: block !important;
  }
`

export const DotsWrapper = styled.ul`
  bottom: -54px !important;
`

export const CustomDot = styled.div`
  width: 14px;
  height: 14px;

  border-radius: 50%;
  background-color: var(--c-p-selago);
`

export const Card = styled.div`
  display: flex !important;
`

export const ImageWrapper = styled.div`
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`

export const Image = styled.img`
  width: 100%;

  @media ${device.laptop} {
    width: 345px;
    height: 345px;
  }
`

export const Content = styled.div`
  font-size: 1.5rem;
  line-height: 29px;
  font-weight: 500;
  color: #ffffff;

  padding: 4.8em 1.75em 7.5em;

  background-color: var(--c-p-haiti);

  @media ${device.laptop} {
    padding: 1.98em 1.625em 1.98em 3em;
  }
`

export const Testimony = styled.p`
  font-size: inherit;
  font-style: italic;
`

export const Position = styled.p`
  font-size: inherit;
  color: var(--c-p-medium-purple);
  font-weight: bold;

  margin-top: 5em;

  @media ${device.laptop} {
    margin-top: 1.75em;
  }
`

export const Name = styled.p`
  font-size: inherit;
  margin-top: 0.9em;

  @media ${device.laptop} {
    margin-top: 0.625em;
  }
`
