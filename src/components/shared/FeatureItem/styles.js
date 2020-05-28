import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const FeatureItem = styled.div`
  padding-bottom: 7em;

  @media ${device.tablet} {
    display: flex;

    flex-direction: ${props => (props.isEven ? "row-reverse" : "row")};

    justify-content: space-evenly;
  }
`

export const TextContent = styled.div`
  margin-top: 14.6vw;

  @media ${device.tablet} {
    margin: 0;
    width: 45%;
  }

  @media ${device.desktop} {
    width: 386px;
  }
`

export const Title = styled.h3`
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 45%;
    height: 6px;
    top: 130%;
    background-color: var(--c-p-royal-purple);
  }
`

export const Description = styled.p`
  font-size: 1rem;
  line-height: 27px;

  margin-top: 3.125em;
`

export const ImageContainer = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;

    width: calc(100vw + 15%);
    left: -15%;
    height: 200px;
    bottom: 0;
    transform: ${props => (props.isEven ? "skewY(8deg)" : "skewY(-8deg)")};
    background-color: var(
      ${props => (props.isEven ? "--c-s-fog" : "--c-p-selago")}
    );
  }

  @media ${device.tablet} {
    width: 40%;
    &::before {
      width: 105%;
      height: 70%;
      left: -2.5%;
    }
  }

  @media ${device.desktop} {
    width: 45%;
  }
`

export const Image = styled.img`
  width: 100%;
  position: relative;

  padding-bottom: 3em;
`
