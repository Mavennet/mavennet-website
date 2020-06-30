import styled from "styled-components"

import Container from "../../base/Container"
import TextArrowCTA from "../../shared/TextArrowCTA"

import { device } from "../../../consts/deviceSizes"

export const SolutionItem = styled.div`
  color: var(--c-p-haiti);

  position: relative;
  margin-bottom: 28px;

  ${({ isLast }) =>
    isLast &&
    `
      margin-bottom: -77px;
    `}

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    top: -28px;
    right: 0;
    left: 0;
    background-color: var(${props => props.backgroundColor});
    transform: skewY(8.3deg);

    ${({ isLast }) =>
      isLast &&
      `
      z-index: 1;
    `}
  }

  @media ${device.laptop} {
    margin-bottom: 10em;
    ${({ isLast }) =>
      isLast &&
      `
    margin-bottom: -5em;
    `}
    &::before {
      transform: ${props =>
        props.isEven ? "skewY(-8.3deg)" : "skewY(8.3deg)"};
    }
  }

  @media ${device.laptopL} {
    margin-bottom: 13em;

    ${({ isLast }) =>
      isLast &&
      `
    margin-bottom: -5em;
    `}
  }
`

export const ItemContainer = styled(Container)`
  z-index: 1;
  position: relative;

  padding: 4em 0;

  @media ${device.laptop} {
    display: flex;

    justify-content: space-between;
    align-items: flex-start;

    max-width: 1600px;

    ${({ isEven }) =>
      isEven &&
      `
      flex-direction: row-reverse;
    `}

    ${({ isBanner }) =>
      isBanner &&
      `
      align-items: center;
      flex-direction: column;
    `}
  }

  @media ${device.laptopL} {
    padding: 7em 0;
    justify-content: space-evenly;
  }
`
export const Wrapper = styled.div`
  overflow-x: hidden;

  @media ${device.laptop} {
    overflow: visible;
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    width: 50%;

    ${({ isBanner }) =>
      isBanner &&
      `
      margin-top: -7em;
    `}
  }
`

export const Image = styled.img`
  width: ${props => (props.isBanner ? "130%" : "100%")};
  max-width: 450px;

  @media ${device.laptop} {
    width: 100%;

    ${({ isBanner }) =>
      isBanner &&
      `
      width: 230%;
      max-width: unset !important;
    `}
  }

  @media ${device.laptopL} {
    max-width: 725px;
  }
`

export const Content = styled.div`
  margin-top: 2em;

  @media ${device.laptop} {
    width: 50%;
    padding: 0 2em;
    ${({ isBanner }) =>
      isBanner &&
      `
      align-self: flex-end;
      margin-top: -3em;
    `}
  }

  @media ${device.laptopL} {
    ${({ isEven }) =>
      isEven &&
      `
      width: 35%;
    `}
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;

  @media ${device.laptop} {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 0.25px;
    line-height: 56px;
  }
`

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 24px;

  margin-top: 1em;

  @media ${device.laptop} {
    font-size: 16px;
    letter-spacing: 0.25px;
    line-height: 24px;

    font-weight: 400;

    margin-top: 24px;
  }
`
export const CTA = styled(TextArrowCTA)`
  margin-top: 32px;
  @media ${device.laptop} {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 29px;
  }
`

export const Logo = styled.img`
  display: block;
  max-width: 200px;
  height: auto;
  max-height: 50px;

  margin-bottom: 30px;

  @media ${device.laptop} {
    max-height: 64px;
  }
`
