import styled from "styled-components"

import { RELEVANCE, BUBBLE_STYLE } from "../../../content/timeline"

const dimensions = {
  [RELEVANCE.LOW]: "22px",
  [RELEVANCE.MEDIUM]: "36px",
  [RELEVANCE.HIGH]: "48px",
}

const bubbleProperties = {
  [BUBBLE_STYLE.WHITE]: {
    backgroundColor: "--c-p-white",
    borderColor: "--c-p-medium-purple",
  },
  [BUBBLE_STYLE.LIGHT_PINK]: {
    backgroundColor: "--c-p-selago-dark",
    borderColor: "--c-p-selago-dark",
  },
  [BUBBLE_STYLE.DARK_PINK]: {
    backgroundColor: "--c-p-medium-purple",
    borderColor: "--c-p-medium-purple",
  },
}

export const TimelineBubble = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  ${({ position }) => `
    top: ${position.top};
    right: ${position.right};
  
  `}

  ${({ relevance }) => `
    height: ${dimensions[relevance]};
    width: ${dimensions[relevance]};
  `}

  ${({ bubbleStyle }) => `
    background-color: var(${bubbleProperties[bubbleStyle].backgroundColor});
    border: 1px solid var(${bubbleProperties[bubbleStyle].borderColor});
  `}

  ${({ isImageVisible }) =>
    isImageVisible &&
    `
    background-color: unset;
    border: 1px solid transparent;
  `}

transition: background-color 0.9s, border 0.9s;
`

export const Icon = styled.img`
  display: block;
  opacity: ${({ visible }) => (visible ? "1" : 0)};

  max-width: 100%;
  max-height: 100%;

  transition: opacity 0.9s;
`
