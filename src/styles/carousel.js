import { css } from "styled-components"

export const carousel = css`
  .slick-dots .slick-active div {
    background-color: var(--c-p-royal-purple);
  }

  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    height: inherit !important;
  }

  .slick-slide > div {
    height: 100% !important;
  }

  .slick-slider.solution-slider {
    .slick-arrow {
      display: none !important;
    }
    &:hover {
      .slick-arrow {
        display: block !important;
      }
    }
  }
`
