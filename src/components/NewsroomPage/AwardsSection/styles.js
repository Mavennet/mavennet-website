import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const AwardsSection = styled.section`
  padding: 2.8125em 0;
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

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 31%);
    grid-column-gap: 3%;
    grid-row-gap: 5%;
    grid-template-areas: "banner banner banner";
  }
`

export const AwardItem = styled.li`
  &:not(:first-child) {
    margin-top: 2.1875em;
  }

  @media ${device.laptop} {
    margin-top: 0 !important;
    ${({ isFirst }) =>
      isFirst &&
      `
        grid-area: banner;
      `}
  }
`

export const AwardCard = styled.a`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 385px;
  padding: 3.5em 3.4em;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 3px solid var(--c-s-perfume);

  @media ${device.laptop} {
    padding: 2.5em 3.4em;
  }

  ${({ isFirst }) =>
    isFirst &&
    `
    padding: 3.5em 3.4em;
    background-color: var(--c-s-perfume);

    @media ${device.laptop} {
      justify-content: space-between;
      max-width: unset;

      ${AwardTitle} {
        display: block;
      }
    }
  `}
`

export const ImageWrapper = styled.div``

export const Image = styled.img`
  display: block;
  width: 100%;

  @media ${device.laptop} {
    max-width: 200px;
  }
`

export const AwardTitle = styled.h3`
  display: none;

  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;

  width: 60%;
`
