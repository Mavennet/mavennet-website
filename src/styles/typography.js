import { css } from "styled-components"

import { device } from "../consts/deviceSizes"

const typography = css`
  html {
    font-family: "Barlow", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: var(--c-p-haiti);
  }

  :root {
    --f-d-s-headline-large: 3rem;
    --f-d-s-headline-medium: 2.5rem;
    --f-d-s-statement-large: 2.125rem;
    --f-d-s-statement-medium: 1.5rem;
    --f-d-s-paragraph: 1rem;
    --f-d-s-button-link: 1rem;
    --f-d-s-small: 0.75rem;

    --f-d-w-headline-large: 700;
    --f-d-w-headline-medium: 700;
    --f-d-w-statement-large: 600;
    --f-d-w-statement-medium: 500;
    --f-d-w-paragraph: 400;
    --f-d-w-button-link: 500;
    --f-d-w-small: 400;

    --f-d-h-headline-large: 58px;
    --f-d-h-headline-medium: 48px;
    --f-d-h-statement-large: 41px;
    --f-d-h-statement-medium: 29px;
    --f-d-h-paragraph: 27px;
    --f-d-h-button-link: 27px;
    --f-d-h-small: 15px;

    --f-m-s-headline-large: 2.5rem;
    --f-m-s-headline-medium: 2.125rem;
    --f-m-s-statement-large: 1.5rem;
    --f-m-s-statement-medium: 1.5rem;
    --f-m-s-paragraph: 1rem;
    --f-m-s-button-link: 1rem;
    --f-m-s-small: 0.75rem;

    --f-m-w-headline-large: 700;
    --f-m-w-headline-medium: 600;
    --f-m-w-statement-large: 500;
    --f-m-w-statement-medium: 500;
    --f-m-w-paragraph: 400;
    --f-m-w-button-link: 500;
    --f-m-w-small: 400;

    --f-m-h-headline-large: 48px;
    --f-m-h-headline-medium: 34px;
    --f-m-h-statement-large: 20px;
    --f-m-h-statement-medium: 29px;
    --f-m-h-paragraph: 27px;
    --f-m-h-button-link: 27px;
    --f-m-h-small: 15px;
  }

  h1 {
    font-size: var(--f-m-s-headline-large);
    font-weight: var(--f-m-w-headline-large);
    line-height: var(--f-m-h-headline-large);

    @media ${device.laptop} {
      font-size: var(--f-d-s-headline-large);
      font-weight: var(--f-d-w-headline-large);
      line-height: var(--f-d-h-headline-large);
    }
  }

  h2 {
    font-size: var(--f-m-s-headline-medium);
    font-weight: var(--f-m-w-headline-medium);
    line-height: var(--f-m-h-headline-medium);

    @media ${device.laptop} {
      font-size: var(--f-d-s-headline-medium);
      font-weight: var(--f-d-w-headline-medium);
      line-height: var(--f-d-h-headline-medium);
    }
  }

  h3 {
    font-size: var(--f-m-s-statement-large);
    font-weight: var(--f-m-w-statement-large);
    line-height: var(--f-m-h-statement-large);

    @media ${device.laptop} {
      font-size: var(--f-d-s-statement-large);
      font-weight: var(--f-d-w-statement-large);
      line-height: var(--f-d-h-statement-large);
    }
  }

  h4 {
    font-size: var(--f-m-s-statement-medium);
    font-weight: var(--f-m-w-statement-medium);
    line-height: var(--f-m-h-statement-medium);

    @media ${device.laptop} {
      font-size: var(--f-d-s-statement-medium);
      font-weight: var(--f-d-w-statement-medium);
      line-height: var(--f-d-h-statement-medium);
    }
  }

  p {
    font-size: var(--f-m-s-paragraph);
    font-weight: var(--f-m-w-paragraph);
    line-height: var(--f-m-h-paragraph);

    @media ${device.laptop} {
      font-size: var(--f-d-s-paragraph);
      font-weight: var(--f-d-w-paragraph);
      line-height: var(--f-d-h-paragraph);
    }
  }

  a,
  button {
    font-size: var(--f-m-s-button-link);
    font-weight: var(--f-m-w-button-link);
    line-height: var(--f-m-h-button-link);

    @media ${device.laptop} {
      font-size: var(--f-d-s-button-link);
      font-weight: var(--f-d-w-button-link);
      line-height: var(--f-d-h-button-link);
    }
  }

  small {
    font-size: var(--f-m-s-small);
    font-weight: var(--f-m-w-small);
    line-height: var(--f-m-h-small);

    @media ${device.laptop} {
      font-size: var(--f-d-s-small);
      font-weight: var(--f-d-w-small);
      line-height: var(--f-d-h-small);
    }
  }
`

export default typography
