import styled from "styled-components"

import TextArrowCTA from "../../shared/TextArrowCTA"

import { device } from "../../../consts/deviceSizes"

export const MediaSection = styled.section`
  @media ${device.laptop} {
    padding: 4em 0;
  }
`

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  line-height: 58px;
  text-align: center;
`

export const Grid = styled.div`
  display: grid;
  margin-top: 3.75em;

  grid-template-columns: 100%;
  grid-gap: 35px;

  @media ${device.laptop} {
    max-width: unset;
    grid-template-columns: repeat(6, 15%);
    grid-column-gap: 2%;
    grid-row-gap: 5%;
    grid-template-areas:
      "header1 header1 header1 header2 header2 header2"
      "body1 body1 body2 body2 body3 body3";
  }
`
export const MediaCard = styled.a`
  padding: 2.375em 2.6875em;

  max-width: 250px;
  background-color: var(--c-p-selago);

  @media ${device.laptop} {
    max-width: unset;

    grid-area: ${props => props.area};

    ${({ area }) =>
      (area === "header1" || area === "header2") &&
      `
        padding: 4.375em 8em 5.375em 5em;
        ${CardText} {
          margin-top: 2.1875em;
        }
      `}
  }
`

export const CardImage = styled.img`
  display: block;
  max-width: 100%;
  height: ${({ isSmall }) => (isSmall ? "40px" : "65px")};
`

export const CardText = styled.h3`
  color: var(--c-p-haiti);

  font-size: 1.25rem;
  font-weight: 500;
  line-height: 24px;

  margin-top: 1.3em;
`

export const CTA = styled(TextArrowCTA)`
  width: fit-content;

  align-self: flex-start;

  @media ${device.laptop} {
    margin-top: 5em;
  }
`
