import styled from "styled-components"

import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const SolutionsSection = styled.section`
  padding: 2.5em 0 0;
  overflow-x: hidden;

  text-align: center;

  @media ${device.laptop} {
    padding: 3.125em 0;
  }
`

export const Header = styled(Container)`
  text-align: center;
  max-width: 790px;

  margin: 0 auto;
`

export const Title = styled.h2``

export const Subtitle = styled.p`
  margin-top: 0.8em;
`

export const SolutionsIconsSection = styled.div`
  margin-top: 3.3125em;

  @media ${device.laptop} {
    margin-top: 2.75em;
  }
`

export const SolutionsList = styled.ul`
  display: flex;

  justify-content: space-between;
  align-items: stretch;
`
export const IconWrapper = styled.div`
  height: 40px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  padding: 0 20px;
`

export const IconImage = styled.img`
  display: block;
  max-width: 100%;
  min-width: 109px;

  transition: transform 0.4s;

  ${({ isMobile }) =>
    isMobile &&
    `
    max-height: 100%;
    margin: 0 auto;
  `}
`

export const Arrow = styled.div`
  &::before {
    display: none;
  }

  ${({ isBanner, isPrev }) =>
    isBanner &&
    `
    top: calc(50% - 33px);
    z-index: 1;

    ${
      isPrev
        ? `
        left: 12% !important;
      `
        : `
      right: 13% !important;`
    }

  `}
`

export const ArrowImage = styled.img`
  ${({ isBanner }) =>
    isBanner &&
    `
      height: 66px;
      widthL 32px;
`}
  ${({ isPrev }) =>
    isPrev &&
    `
    transform: rotate(180deg);
  `}
`

export const SolutionIcon = styled.li`
  box-sizing: content-box;
  margin: 0 1em;
  padding: 0.5em 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 37px;

  max-width: 200px;

  cursor: pointer;

  ${({ active }) =>
    active &&
    `
      background-color: var(--c-p-selago-dark);
  `}

  transition: background-color .8s;

  &:hover {
    background-color: var(--c-p-selago-dark);
  }

  &:hover ${IconImage} {
    ${({ active }) =>
      !active &&
      `
        transform: translate(-1px, 2px);
      `}
  }
`

export const SlideSection = styled.section`
  margin: 4em 0;
  position: relative;

  &:before {
    display: none;

    z-index: -1;
    content: "";
    position: absolute;
    width: 110%;
    height: 100%;
    top: 0;
    left: 0;
    transform: skewY(4deg);
    background-color: var(--c-p-selago);

    @media ${device.laptop} {
      display: block;
    }
  }
`

export const SolutionItem = styled.div`
  position: relative;

  /* height: 100%; */

  padding: 2.5em 0 3.875em;

  background-color: var(--c-p-selago-dark);
`

export const ItemContainer = styled(Container)`
  position: relative;

  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: stretch;
  @media ${device.tablet} {
    flex-direction: row;
  }
`

export const ImageContainer = styled.div`
  @media ${device.tablet} {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Image = styled.img`
  width: 100%;
  max-width: 380px;
  height: auto;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 100%;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 2em;

  max-width: 600px;

  text-align: left;

  @media ${device.tablet} {
    box-sizing: border-box;
    width: 50%;
    max-width: 50%;

    margin-top: 0;
    padding-right: 4em;
  }

  @media ${device.laptopL} {
    padding-right: 6em;
  }
`

export const ItemLogo = styled.img`
  height: 40px;
`

export const ItemTitle = styled.h3`
  margin-top: 0.4em;
`

export const Description = styled.p`
  margin-top: 1.625em;
`

export const ButtonWrapper = styled.div`
  margin-top: 1.5625em;
`

export const CustomDot = styled.div`
  width: 14px;
  height: 14px;

  border-radius: 50%;
  background-color: var(--c-p-selago);
`

export const DotsWrapper = styled.ul`
  bottom: -54px !important;

  ${({ mobileHidden }) =>
    mobileHidden &&
    `
    display: none !important;

    @media ${device.laptop} {
      display: block !important;
    }
  `}
`
