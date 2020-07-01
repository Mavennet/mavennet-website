import styled from "styled-components"

import TextArrowCTA from "../../shared/TextArrowCTA"

import { device } from "../../../consts/deviceSizes"

export const LearnMoreSection = styled.section`
  padding: 3.625em 0 5.625em;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: var(--c-p-selago);
    z-index: -1;

    @media ${device.laptop} {
      transform: skewY(5deg);
    }
  }

  @media ${device.laptop} {
    margin: 60px 0 -5.875em;
    padding: 6em 0 12.75em;
  }
`

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 0.25px;
  line-height: 56px;

  @media ${device.laptop} {
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 64px;
    text-align: center;
  }
`

export const LinksList = styled.ul`
  margin-top: 3.125em;
  width: 100%;

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }
`

export const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 1.75em;
  }

  @media ${device.laptop} {
    margin-top: 0 !important;
    width: 30%;
  }
`

export const LinkItem = styled.div``

export const LinkCTA = styled(TextArrowCTA)`
  font-size: 2.125em !important;
  margin: 0 auto;

  h4 {
    color: var(--c-p-haiti);
  }

  @media ${device.laptop} {
    margin: unset;
  }
`

export const LinkDescription = styled.p`
  display: none;

  font-size: 1rem;
  line-height: 27px;
  font-weight: 400;

  margin-top: 1.1em;

  @media ${device.laptop} {
    display: block;
  }
`
