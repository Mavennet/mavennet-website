import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const FeatureTimeline = styled.div`
  margin-top: 4.875em;
`

export const FeatureList = styled.ul``

export const ListItem = styled.li`
  position: relative;
  &:not(:first-child) {
    margin-top: 5.3125em;
  }

  @media ${device.laptop} {
    &::before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: var(--c-p-royal-purple);
      top: 42px;
      left: calc(50% - 8px);
    }

    &:not(:last-child) {
      &::after {
        content: "";
        position: absolute;
        width: 2px;
        height: calc(100% + (5.3125em - 36px));
        background-color: var(--c-s-perfume);
        top: 68px;
        left: calc(50% - 1px);
      }
    }
  }
`

export const Feature = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: ${props => (props.isEven ? "row" : "row-reverse")};
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const TextContent = styled.div`
  margin-top: 2.5em;

  @media ${device.laptop} {
    width: 45%;
    margin-top: 0;
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
    bottom: -18px;
    width: 40%;
    height: 6px;

    background-color: var(--c-p-royal-purple);
  }

  @media ${device.laptop} {
    &::before {
      width: 30%;
      height: 5px;
    }
  }
`

export const Description = styled.p`
  font-size: 1rem;
  line-height: 27px;
  font-weight: 400;

  margin-top: 2.875em;

  @media ${device.laptop} {
    margin-top: 3.4375em;
    max-width: 360px;
  }
`

export const ImageWrapper = styled.div`
  max-width: 350px;

  @media ${device.laptop} {
    width: 45%;
    max-width: 430px;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
`
