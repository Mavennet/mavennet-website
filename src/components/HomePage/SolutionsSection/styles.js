import styled from "styled-components"

import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const ItemContainer = styled(Container)`
  position: relative;
  @media ${device.tablet} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`

export const SolutionsSection = styled.section`
  padding: 2em 0 3em;
  overflow-x: hidden;
`

export const SolutionItem = styled.div`
  position: relative;
  overflow: hidden;

  padding: 4em 0 5em;

  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    width: 300%;
    height: 91%;
    top: 8.5%;
    left: -50%;
    transform: rotate(6deg);
    background-color: var(--c-p-selago-dark);

    @media ${device.tablet} {
      width: 300%;
      height: 77%;

      top: 23%;
    }
  }
`

export const Image = styled.img`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media ${device.tablet} {
    margin-right: -46%;
  }
`

export const ContentWrapper = styled.div`
  margin-top: 1.2em;
`

export const Title = styled.h3``

export const Description = styled.p`
  margin-top: 1.875em;
`

export const ButtonWrapper = styled.div`
  margin-top: 2.5em;
`
export const CustomDot = styled.div`
  width: 11px;
  height: 11px;

  border-radius: 50%;
  background-color: var(--c-p-selago);
`
