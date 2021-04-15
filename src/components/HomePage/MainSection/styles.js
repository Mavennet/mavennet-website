import styled from "styled-components"

import Slider from "react-slick"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
`

export const CustomSlider = styled(Slider)`
  & .slick-dots {
    bottom: 100px;
    left: 7.5%;
    width: unset;
    height: inherit !important;

    display: none !important;

    @media ${device.tablet} {
      display: block !important;
    }

    @media ${device.desktop} {
      bottom: 248px;
      left: calc((100% - 1250px) / 2);
    }
  }

  & .slick-dots li button:before {
    color: var(--c-p-white);
    opacity: .4;
  }

  & .slick-dots li.slick-active button:before {
    color: var(--c-p-white);
    opacity: 1;
  }
`

export const CarrouselItem = styled.div`
  background: url(${props => props.backgroundImage}) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  min-height: 100vh;
  box-sizing: border-box;

  padding: 100px 0;

  @media ${device.desktop} {
    height: 100vh;
    padding: 179px 0 248px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${device.laptop} {
    width: 50%;
  }
`

export const Title = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;

  color: var(--c-p-white);
`

export const ImagesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-top: 60px;

  @media ${device.mobileL} {
    justify-content: flex-start;
  }
`

export const ImageContainer = styled.li`
  max-width: 124px;

  @media ${device.mobileL} {
    margin-right: 53px;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

export const ScrollAction = styled.div`
  text-align: center;

  width: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  position: absolute;
  left: calc(50% - 52.5px);
  bottom: 35px;
  
  svg {
    width: 12px;
  }

  @media ${device.laptop} {
    bottom: 60px;
  }
`

export const ScrollText = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 180%;
  letter-spacing: 0.25px;
  color: var(--c-p-white);
`