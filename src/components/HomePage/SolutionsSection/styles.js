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

export const SolutionsList = styled.ul`
  display: none;
  margin-top: 3.3125em;

  justify-content: space-between;
  align-items: stretch;

  @media ${device.laptop} {
    margin-top: 2.75em;
    display: flex;
  }
`

export const SolutionIcon = styled.li`
  box-sizing: content-box;
  margin: 0 1em;
  padding: 0.5em 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--c-p-selago-dark);
  border-radius: 37px;

  max-width: 200px;

  cursor: pointer;
`

export const IconImage = styled.img`
  display: block;
  max-width: 100%;
`

export const SlideSection = styled.section`
  margin: 4em 0;
  position: relative;

  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    width: 110%;
    height: 100%;
    top: 0;
    left: 0;
    transform: skewY(6deg);
    background-color: var(--c-p-selago);
  }
`

export const SolutionItem = styled.div`
  position: relative;

  height: 100%;

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
  max-width: 100%;
  height: auto;
  margin: 0 auto;
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
`
