import styled from 'styled-components'

import Slider from 'react-slick'

import { device } from '../../../consts/deviceSizes'

export const TwitterSection = styled.section`
  padding: 165px 0;
`

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;
  text-align: center;


  @media ${device.laptop} {
    text-align: left;
    font-size: 48px;
    letter-spacing: 0;
    line-height: 56px;
  }
`

export const CustomSlider = styled(Slider)`
  margin-top: 60px;
  & .slick-dots li button:before {
    color: var(--c-p-selago-dark);
    opacity: .4;
  }

  & .slick-dots .slick-active div {
    background-color: var(--c-p-medium-purple);
  }

  & .slick-dots li.slick-active button:before {
    color: var(--c-p-selago-dark);
    opacity: 1;
  }

  @media ${device.laptop} {
    & .slick-slide {
      margin: 0 30px;
    }

    & .slick-list {
        margin: 0 -30px;
    }
  }
`

export const DotsWrapper = styled.ul`
  bottom: -54px !important;
`

export const CustomDot = styled.div`
  width: 8px;
  height: 8px;

  border-radius: 50%;
  background-color: var(--c-p-selago-dark);
`

export const CardContainer = styled.div`
`