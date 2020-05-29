import styled from "styled-components"

import GenericMainSection from "../../shared/GenericMainSection"

import { device } from "../../../consts/deviceSizes"

export const ImpactSection = styled(GenericMainSection)`
  text-align: left;

  padding: 5.625em 0;

  &::after,
  &::before {
    display: none;
  }

  @media ${device.desktop} {
    padding-bottom: 12em;
    &::after,
    &::before {
      display: block;
    }
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;

  @media ${device.laptop} {
    text-align: center;
  }

  @media ${device.laptop} {
    font-size: 3rem;
  }
`

export const ImpactList = styled.ul`
  margin-top: 4.4375em;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 2.4375em;
  }
`

export const ImpactItem = styled.li`
  &:not(:first-child) {
    margin-top: 3.75em;
  }

  @media ${device.tablet} {
    margin-top: 3.75em !important;
    width: 45%;
  }

  @media ${device.desktop} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const ImpactImage = styled.div`
  display: none;
  margin-right: 2em;

  width: 63px;
  height: 63px;
  border-radius: 50%;
  background-color: var(--c-p-medium-purple);

  @media ${device.desktop} {
    display: block;
  }
`

export const TextContent = styled.div`
  @media ${device.desktop} {
    width: calc(100% - 95px);
  }
`

export const ImpactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 29px;
`

export const ImpactDescription = styled.p`
  font-size: 1rem;
  line-height: 27px;

  margin-top: 1.5em;
`
