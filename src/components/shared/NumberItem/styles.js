import styled, { keyframes } from "styled-components"

export const NumberItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 0 15px;

  width: 100%;
`

export const CircularChart = styled.svg`
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 123px;
`

const progress = keyframes`
  0% {
    stroke-dasharray: 0 100;
  }
`

export const CircleBg = styled.path`
  fill: none;
  stroke: var(--c-p-medium-purple);
  stroke-width: 3.8;
`

export const Circle = styled.path`
  fill: none;
  stroke-width: 3.8;
  stroke-linecap: round;
  stroke: var(--c-p-royal-purple);
  animation: ${progress} 2s ease-out forwards;
`

export const Number = styled.text`
  fill: var(--c-p-royal-purple);
  font-family: sans-serif;
  font-size: 0.5em;
  text-anchor: middle;
`

export const Description = styled.p`
  font-size: 1rem;
  line-height: 27px;
  text-align: center;

  margin-top: 1em;
`
