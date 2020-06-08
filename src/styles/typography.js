import { css } from "styled-components"

const typography = css`
  html {
    font-family: "Barlow", sans-serif;
    font-size: 16px;
    color: var(--c-p-haiti);
  }

  h1 {
    font-weight: 700;
    font-size: 3rem;
    line-height: 58px;
  }

  h2 {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 48px;
  }

  h3 {
    font-weight: 600;
    font-size: 2.125rem;
    line-height: 41px;
  }

  h4 {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 29px;
  }

  p,
  button,
  a {
    font-weight: 500;
    font-size: 1rem;
    line-height: 27px;
  }

  small {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 15px;
  }
`

export default typography
