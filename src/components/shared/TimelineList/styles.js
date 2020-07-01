import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const TimelineList = styled.div`
  scroll-behavior: smooth;

  max-height: 400px;
  overflow-y: scroll;

  padding: 3em 1em;
  @media ${device.laptop} {
    padding: 3em 6em 0 8em;
    max-height: 630px;
  }
`

export const TimelineYear = styled.div`
  &:not(:first-child) {
    margin-top: 3em;
  }

  @media ${device.laptop} {
    margin-top: 0;
  }
`

export const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 1em;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 1px;
    background-color: var(--c-p-medium-purple);
  }

  @media ${device.laptop} {
    flex-direction: row;
    padding-left: 2em;
    padding-bottom: 0;

    &::before {
      bottom: calc(50% - 42px);
      right: -2em;
    }
  }
`

export const Year = styled.h3`
  font-size: var(--f-d-s-headline-medium);
  font-weight: var(--f-d-w-statement-large);
  line-height: var(--f-d-h-headline-medium);
  color: var(--c-p-royal-purple);

  align-self: flex-start;

  @media ${device.laptop} {
    align-self: center;
  }
`

export const Image = styled.img`
  max-width: 100%;

  z-index: 2;
`

export const EventList = styled.ul`
  margin-top: 2em;

  @media ${device.laptop} {
    margin-top: 0;
  }
`

export const Event = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:not(:first-child) {
    margin-top: 2em;
  }
`

export const ColLogo = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    width: 12%;
  }
`

export const Logo = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`

export const TextContent = styled.div`
  width: 80%;
  padding-left: 1.75em;
  text-align: left;

  @media ${device.laptop} {
    width: 88%;
  }
`

export const Title = styled.h4`
  font-size: 1rem;
  letter-spacing: 0.25px;

  font-weight: 600 !important;
  line-height: 24px;
  color: var(--c-p-haiti);
  font-weight: var(--f-d-w-paragraph);
`

export const Subtitle = styled.p`
  font-size: 1rem;
  letter-spacing: 0.25px;
  line-height: 24px;
  color: var(--c-p-haiti);
  font-weight: var(--f-d-w-paragraph);

  margin-top: 0.5625em;
`
