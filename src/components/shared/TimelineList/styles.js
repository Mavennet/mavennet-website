import styled from "styled-components"

export const TimelineList = styled.div`
  padding: 3em 6em 0 8em;
  scroll-behavior: smooth;

  max-height: 630px;
  overflow-y: scroll;
`

export const TimelineYear = styled.div``

export const Header = styled.header`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2em;

  &::before {
    content: "";
    position: absolute;
    bottom: calc(50% - 42px);
    right: -2em;
    left: 0;
    height: 1px;
    background-color: var(--c-p-medium-purple);
  }
`

export const Year = styled.h3`
  font-size: var(--f-d-s-headline-medium);
  font-weight: var(--f-d-w-statement-large);
  line-height: var(--f-d-h-headline-medium);
  color: var(--c-p-royal-purple);
`

export const Image = styled.img`
  max-width: 100%;

  z-index: 2;
`

export const EventList = styled.ul``

export const Event = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:not(:first-child) {
    margin-top: 2em;
  }
`

export const ColLogo = styled.div`
  width: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`

export const TextContent = styled.div`
  width: 88%;

  padding-left: 1.75em;
  text-align: left;
`

export const Title = styled.h4`
  font-size: 1rem;
  letter-spacing: 0.25px;
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
