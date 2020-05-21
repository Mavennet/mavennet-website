import { Link } from "gatsby"
import styled from "styled-components"

export const Button = styled(Link)`
  color: var(--c-p-selago);

  padding: 0.59375em 1.75em;
  border: 2px solid var(--c-p-royal-purple);
  background-color: var(--c-p-royal-purple);
  cursor: pointer;

  &:hover {
    background-color: var(--c-p-royal-purple-dark);
    border-color: var(--c-p-royal-purple-dark);
  }

  ${({ reverse }) =>
    reverse &&
    `
      color: var(--c-p-royal-purple);
      background-color: transparent;
      border-color: var(--c-p-royal-purple) !important;

      &:hover {
        background-color: var(--c-p-royal-purple);
        color: var(--c-p-selago);
      }
    `};

  ${({ outline, theme }) =>
    (outline || theme.button == "outline") &&
    `
      color: #FFFFFF;
      background-color: transparent;
      border-color: #FFFFFF;

      &:hover {
        background-color: var(--c-p-royal-purple);
        border-color: var(--c-p-royal-purple);
      }
    `};
`
