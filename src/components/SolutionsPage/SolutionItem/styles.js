import styled from "styled-components"

import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const SolutionItem = styled.div`
  color: var(--c-p-haiti);

  position: relative;
  margin-bottom: 28px;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    top: -28px;
    right: 0;
    left: 0;
    background-color: var(${props => props.backgroundColor});
    transform: skewY(8.3deg);
  }

  @media ${device.laptop} {
    margin-bottom: 10em;
    &::before {
      transform: ${props =>
        props.isEven ? "skewY(-8.3deg)" : "skewY(8.3deg)"};
    }
  }

  @media ${device.laptopL} {
    margin-bottom: 17em;
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

  @media ${device.laptopL} {
    width: auto;
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
    width: 40%;
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
      width: auto;
    `}
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: -0.13px;
  line-height: 48px;
`

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.07px;
  line-height: 24px;

  margin-top: 1em;
`
