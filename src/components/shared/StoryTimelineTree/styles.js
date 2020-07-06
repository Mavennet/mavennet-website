import styled from "styled-components"

export const StoryTimelineTree = styled.div`
  width: 100%;
  padding-top: 3em;
`

export const YearCircle = styled.div`
  cursor: pointer;

  height: 59px;
  width: 59px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 65px;
    height: 65px;

    z-index: -1;
    background-color: white;

    top: -5px;
    left: -5px;
    border-radius: 50%;
    border: 2px solid var(--c-p-medium-purple);
  }
`

export const Year = styled.h4`
  color: white;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`

export const SVGWrapper = styled.div`
  align-self: center;
  height: 200px;
  width: calc(100% - 68px);

  z-index: -2;

  margin-top: -24px;
  margin-bottom: -24px;
`

export const SVG = styled.svg`
  stroke-width: 3;
`

export const YearSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${({ reverse }) =>
    reverse ? `align-items: flex-end;` : `align-items: flex-start;`}

  ${YearCircle} {
    background-color: ${({ active }) =>
      active ? `var(--c-p-royal-purple)` : `var(--c-p-medium-purple)`};

    &::before {
      border-color: ${({ active }) =>
        active ? `var(--c-p-royal-purple)` : `var(--c-p-medium-purple)`};
    }
  }

  ${SVG} {
    stroke: ${({ active }) =>
      active ? `var(--c-p-royal-purple)` : `var(--c-p-medium-purple)`};
  }

  &:last-child {
    ${SVG} {
      stroke-dasharray: 8;
    }
  }
`

export const MobileTree = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  margin: 0 auto;

  position: relative;
  z-index: 1;
`

export const MobileYearWrapper = styled.div``

export const MobileYear = styled(YearCircle)`
  background-color: ${({ active }) =>
    active ? `var(--c-p-royal-purple)` : `var(--c-p-medium-purple)`};

  &::before {
    border-color: ${({ active }) =>
      active ? `var(--c-p-royal-purple)` : `var(--c-p-medium-purple)`};
  }
`

export const Divider = styled.div`
  flex-grow: 1;
  border-bottom: 2px solid #d5b7f6;
  z-index: -2;
`
