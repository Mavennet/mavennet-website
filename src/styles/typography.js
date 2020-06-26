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

    --f-d-l-headline-large: 0;
    --f-d-l-headline-medium: 0.25px;
    --f-d-l-statement-large: 0.25px;
    --f-d-l-statement-medium: 0;
    --f-d-l-paragraph: 0.25px;
    --f-d-l-button-link: 0.25px;
    --f-d-l-small: 0.5px;

    --f-d-w-headline-large: 700;
    --f-d-w-headline-medium: 700;
    --f-d-w-statement-large: 600;
    --f-d-w-statement-medium: 500;
    --f-d-w-paragraph: 400;
    --f-d-w-button-link: 500;
    --f-d-w-small: 400;

    --f-d-h-headline-large: 64px;
    --f-d-h-headline-medium: 56px;
    --f-d-h-statement-large: 41px;
    --f-d-h-statement-medium: 34px;
    --f-d-h-paragraph: 24px;
    --f-d-h-button-link: 24px;
    --f-d-h-small: 15px;

    --f-m-s-headline-large: 2.5rem;
    --f-m-s-headline-medium: 2.125rem;
    --f-m-s-statement-large: 1.5rem;
    --f-m-s-statement-medium: 1.5rem;
    --f-m-s-paragraph: 1rem;
    --f-m-s-button-link: 1rem;
    --f-m-s-small: 0.75rem;

    --f-m-l-headline-large: 0;
    --f-m-l-headline-medium: 0;
    --f-m-l-statement-large: 0;
    --f-m-l-statement-medium: 0;
    --f-m-l-paragraph: 0.25px;
    --f-m-l-button-link: 0.25px;
    --f-m-l-small: 0.5px;

    --f-m-w-headline-large: 700;
    --f-m-w-headline-medium: 600;
    --f-m-w-statement-large: 500;
    --f-m-w-statement-medium: 500;
    --f-m-w-paragraph: 400;
    --f-m-w-button-link: 500;
    --f-m-w-small: 400;

    --f-m-h-headline-large: 48px;
    --f-m-h-headline-medium: 31px;
    --f-m-h-statement-large: 34px;
    --f-m-h-statement-medium: 34px;
    --f-m-h-paragraph: 24px;
    --f-m-h-button-link: 24px;
    --f-m-h-small: 15px;
  }

  h1,
  .headline-large {
    font-size: var(--f-m-s-headline-large);
    font-weight: var(--f-m-w-headline-large);
    line-height: var(--f-m-h-headline-large);

    @media ${device.laptop} {
      font-size: var(--f-d-s-headline-large);
      font-weight: var(--f-d-w-headline-large);
      line-height: var(--f-d-h-headline-large);
    }
  }

  h2,
  .headline-medium {
    font-size: var(--f-m-s-headline-medium);
    font-weight: var(--f-m-w-headline-medium);
    line-height: var(--f-m-h-headline-medium);
    letter-spacing: var(--f-m-l-headline-medium);

    @media ${device.laptop} {
      font-size: var(--f-d-s-headline-medium);
      font-weight: var(--f-d-w-headline-medium);
      line-height: var(--f-d-h-headline-medium);
      letter-spacing: var(--f-d-l-headline-medium);
    }
  }

  h3,
  .statement-large {
    font-size: var(--f-m-s-statement-large);
    font-weight: var(--f-m-w-statement-large);
    line-height: var(--f-m-h-statement-large);
    letter-spacing: var(--f-m-l-statement-large);

    @media ${device.laptop} {
      font-size: var(--f-d-s-statement-large);
      font-weight: var(--f-d-w-statement-large);
      line-height: var(--f-d-h-statement-large);
      letter-spacing: var(--f-d-l-statement-large);
    }
  }

  h4,
  .statement-medium {
    font-size: var(--f-m-s-statement-medium);
    font-weight: var(--f-m-w-statement-medium);
    line-height: var(--f-m-h-statement-medium);
    letter-spacing: var(--f-m-l-statement-medium);

    @media ${device.laptop} {
      font-size: var(--f-d-s-statement-medium);
      font-weight: var(--f-d-w-statement-medium);
      line-height: var(--f-d-h-statement-medium);
      letter-spacing: var(--f-d-l-statement-medium);
    }
  }

  p,
  .paragraph {
    font-size: var(--f-m-s-paragraph);
    font-weight: var(--f-m-w-paragraph);
    line-height: var(--f-m-h-paragraph);
    letter-spacing: var(--f-m-l-paragraph);

    @media ${device.laptop} {
      font-size: var(--f-d-s-paragraph);
      font-weight: var(--f-d-w-paragraph);
      line-height: var(--f-d-h-paragraph);
      letter-spacing: var(--f-d-l-paragraph);
    }
  }

  a,
  button,
  .button-link {
    font-size: var(--f-m-s-button-link);
    font-weight: var(--f-m-w-button-link);
    line-height: var(--f-m-h-button-link);
    letter-spacing: var(--f-m-l-button-link);

    @media ${device.laptop} {
      font-size: var(--f-d-s-button-link);
      font-weight: var(--f-d-w-button-link);
      line-height: var(--f-d-h-button-link);
      letter-spacing: var(--f-d-l-button-link);
    }
  }

  small,
  .small {
    font-size: var(--f-m-s-small);
    font-weight: var(--f-m-w-small);
    line-height: var(--f-m-h-small);
    letter-spacing: var(--f-m-l-small);

    @media ${device.laptop} {
      font-size: var(--f-d-s-small);
      font-weight: var(--f-d-w-small);
      line-height: var(--f-d-h-small);
      letter-spacing: var(--f-d-l-small);
    }
  }
`

export default typography
