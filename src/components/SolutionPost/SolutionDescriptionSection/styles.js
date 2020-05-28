import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const SolutionDescriptionSection = styled.section`
  padding: 5em 0;
  background-color: var(--c-p-selago);

  @media ${device.laptop} {
    padding: 6em 0;
  }
`

export const Title = styled.h2`
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;
  max-width: 900px;

  @media ${device.laptop} {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 48px;
    text-align: center;
  }
`

export const Content = styled.div`
  margin-top: 2.875em;
  @media ${device.laptop} {
    ${({ isBanner }) =>
      !isBanner &&
      `
    display: flex;
    justify-content: space-between;
    
    `}
  }
`

export const ImageContainer = styled.div`
  @media ${device.laptop} {
    ${({ isBanner }) =>
      !isBanner &&
      `
    width: 45%;
    max-width: 563px;
    
    `}
  }
`

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
`

export const PointsList = styled.ul`
  margin-top: 3em;

  @media ${device.laptop} {
    margin-top: 0;
    width: 45%;

    ${({ isBanner }) =>
      isBanner &&
      `
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 3em;

        ${PointsItem} {
          width: 50%;
          margin-top: 2em;
        }
      `}
  }
`

export const PointsItem = styled.li`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 24px;

  margin-top: 1.7em;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media ${device.laptop} {
    font-size: 1.5rem;
    margin-top: 1em;
  }
`

export const CheckIcon = styled.img`
  width: 35px;

  margin-right: 1.45em;
`
