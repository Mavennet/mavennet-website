import { css } from "styled-components"

import { device } from "../consts/deviceSizes"

const typography = css`
  html {
    font-family: "Barlow", sans-serif;
    font-size: 16px;
    color: var(--c-p-haiti);
  }

  h1 {
    font-size: 2.5rem;
    line-height: 48px;
    font-weight: 700;

    @media ${device.laptop} {
      font-size: 3rem;
      line-height: 58px;
    }
  }

  h2 {
    font-size: 2.125rem;
    font-weight: 600;
    line-height: 41px;

    @media ${device.laptop} {
      font-size: 2.5rem;
      line-height: 48px;
      font-weight: 700;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 29px;

    @media ${device.laptop} {
      font-size: 2.125rem;
      line-height: 41px;
      font-weight: 600;
    }
  }

  h4 {
    font-size: 1rem;
    line-height: 27px;
    font-weight: 500;

    @media ${device.laptop} {
      font-size: 1.5rem;
      line-height: 29px;
    }
  }

  p,
  button,
  a {
    font-size: 1rem;
    line-height: 27px;
  }

  p {
    font-weight: 400;
  }

  button,
  a {
    font-weight: 500;
  }

  small {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 15px;
  }
`

export default typography
