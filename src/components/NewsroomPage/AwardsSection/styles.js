import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const AwardsSection = styled.section`
  padding: 2.8125em 0;

  @media ${device.laptop} {
    padding: 4em 0 5em;
  }
`

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  line-height: 58px;
  text-align: center;
`

export const AwardList = styled.ul`
  margin-top: 3.75em;

  display: grid;

  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 31%);
    grid-column-gap: 3%;
    grid-row-gap: 5%;
    grid-template-areas:
      "banner banner banner"
      "first second second"
      "third third fourth";
  }
`

export const AwardItem = styled.li`
  &:not(:first-child) {
    margin-top: 2.1875em;
  }

  @media ${device.laptopL} {
    margin-top: 0 !important;

    ${({ position }) => {
      switch (position) {
        case 0:
          return `grid-area: banner;`
        case 1:
          return `grid-area: first;`
        case 2:
          return `grid-area: second;`
        case 3:
          return `grid-area: third;`
        case 3:
          return `grid-area: fourth;`
        default:
          return ""
      }
    }}
  }
`

export const AwardTitle = styled.h3`
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;

  display: none;

  width: 60%;

  ${({ isFirst }) =>
    !isFirst &&
    `
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 34px;
    padding-left: 30px;
  `}
`

export const AwardCard = styled.a`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 3.5em 3.4em;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;

  border: 3px solid var(--c-s-perfume);

  @media ${device.laptop} {
    padding: 2.5em 0.8em;
  }

  @media (min-width: 1290px) {
    padding: 2.5em 3.4em;
    justify-content: space-between;
    align-items: center;

    ${({ isFirst }) =>
      !isFirst &&
      `
    padding: 2.5em 2.4em;
  `}
  }

  @media ${device.laptopL} {
    ${AwardTitle} {
      display: block;
    }
  }

  ${({ isFirst }) =>
    isFirst &&
    `

    flex-direction: row;
    padding: 3.5em 3.4em;
    background-color: var(--c-s-perfume);

    @media ${device.laptop} {
      justify-content: space-between;
      max-width: unset;
    }
  `}
`

export const ImageWrapper = styled.div``

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  max-height: 100px;

  @media ${device.laptop} {
    max-width: ${({ position }) => (position === 1 ? "106px" : "200px")};
    max-height: 80px;
  }
`
