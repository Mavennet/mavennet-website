import { Link } from "gatsby"

import styled from "styled-components"

export const Cta = styled(Link)`
  width: fit-content;
  color: var(--c-p-royal-purple);

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: var(--c-p-royal-purple-dark);
  }
`

export const Text = styled.h4`
  margin-right: 0.33em;
  font-size: inherit;
`

export const Arrow = styled.svg`
  width: 21px;
  height: 21px;

  margin-top: 3px;
`
