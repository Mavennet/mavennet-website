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
  text-align: center;

  @media ${device.laptop} {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 48px;
    text-align: left;

    ${({ isImageOnly }) =>
    isImageOnly &&
    `
        text-align: center;
    `}
  }
`

export const Col = styled.div`
  width: 100%;

  ${({ textContent }) =>
    textContent &&
    `
    margin-top: 2em;
  `}

  @media ${device.laptop} {
    box-sizing: border-box;
    width: 50%;
    margin-top: 0;

    ${({ imageContent }) =>
    imageContent &&
    `

      padding-right: 6em;
      display: flex;
      align-items: center;
    `}
  }
`

export const Description = styled.p`
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 24px;

  margin-top: 20px;
`

export const Content = styled.div`
  margin-top: 2.875em;

  ${({ isImageOnly }) =>
    isImageOnly &&
    `
        width: 100%;
    `}


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
        width: 100%;
        max-width: 563px;
    
    `}

    ${({ isImageOnly }) =>
    isImageOnly &&
    `
        width: 100%;
        max-width: 100%;
    `}
  }
`

export const Image = styled.img`
  width: 100%;
  object-fit: contain;

  @media ${device.laptop} {
    ${({ maxWidth }) => maxWidth && `
      display: block;
      margin: 0 auto;
      width: ${maxWidth};
    `}
  }
`

export const PointsList = styled.ul`
  margin-top: 3em;

  @media ${device.laptop} {
    margin-top: 2em;
    width: 100%;

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
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 34px;

  margin-top: 1.7em;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media ${device.laptop} {
    margin-top: 1em;
    box-sizing: border-box;

    padding-right: 10px;
  }
`

export const CheckIcon = styled.img`
  width: 35px;

  margin-right: 1.45em;
`
