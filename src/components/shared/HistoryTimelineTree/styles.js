import styled, { keyframes } from "styled-components"

export const HistoryTimelineTree = styled.div`
  width: 50%;
`

export const YearCircle = styled.div`
  cursor: pointer;

  height: 58px;
  width: 58px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 68px;
    height: 68px;

    z-index: -1;
    background-color: white;

    top: -6.8px;
    left: -6.8px;
    border-radius: 50%;
    border: 1.8px solid var(--c-p-medium-purple);
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
