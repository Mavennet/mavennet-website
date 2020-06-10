import styled from "styled-components"

import Button from "../../shared/Button"

import { device } from "../../../consts/deviceSizes"

export const Card = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: ${props => (props.isEven ? "row-reverse" : "row")};
    justify-content: space-between;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  @media ${device.laptop} {
    width: 440px;
    height: 440px;
    position: relative;

    background-color: var(--c-p-selago);

    &::before {
      content: "";
      position: absolute;
      top: -2em;
      ${({ isEven, dimensions }) =>
        isEven ? `left: ${dimensions / 2}px` : `right: ${dimensions / 2}px`};

      height: 2px;
      width: ${props => props.lineWidth}px;
      transform: ${props =>
        props.isEven
          ? `rotate(-${props.lineAngle}deg)`
          : `rotate(${props.lineAngle}deg)`};
      background-color: blue;
    }
  }

  @media ${device.laptopL} {
    width: 500px;
    height: 500px;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 420px;
`

export const TextContent = styled.div`
  margin-top: 3em;

  @media ${device.laptop} {
    width: 40%;
    padding: 0 1em;
    margin-top: 0;
  }
`

export const Title = styled.h3``

export const Description = styled.p`
  margin-top: 1.875em;
`

export const CTA = styled(Button)`
  margin-top: 2.5em;
`

export const PointsList = styled.ul`
  margin-top: 1.875em;

  @media ${device.laptop} {
    display: flex;
    flex-wrap: wrap;
  }
`

export const PointsItem = styled.li`
  &:not(:first-child) {
    margin-top: 1em;
  }

  @media ${device.laptop} {
    margin-top: 1em;
    width: 50%;
  }
`
