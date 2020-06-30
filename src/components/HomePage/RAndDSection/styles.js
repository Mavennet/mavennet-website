import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

import image from "./test.svg"

export const RAndDSection = styled.section`
  padding: 53px 0;
`

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 0.25px;
  line-height: 56px;
  text-align: center;

  @media ${device.laptopL} {
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 64px;
  }
`

export const Description = styled.p`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 34px;
  text-align: center;

  margin-top: 20px;
  max-width: 875px;
`

export const ListWrapper = styled.div`
  margin-top: 74px;
  display: block;
  width: 100%;
`

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const ImageContainer = styled.div`
  width: 203px;
  position: relative;
`

export const Line = styled.img`
  display: none;
  position: absolute;
  left: 98%;
  bottom: 50%;
  width: 44%;
  height: 110%;

  z-index: -1;

  @media ${device.laptopL} {
    display: block;
  }

  @media (min-width: 1400px) {
    display: block;
    width: 71%;
  }

  ${({ isReverse }) =>
    isReverse &&
    `
    transform: rotateX(180deg);
    top: 50%;
    bottom: auto;
    display: none;

    @media (max-width: 1400px) {
      width: 71%;
    }
  `}
`

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
`

export const TextContext = styled.div`
  margin-top: 40px;
  max-width: 238px;

  @media ${device.laptopL} {
    margin-top: 60px;
  }
`

export const Item = styled.div`
  display: flex !important;
  flex-direction: column-reverse;
  align-items: center;
  position: relative;

  @media ${device.laptopL} {
    ${({ isReverse }) =>
      isReverse &&
      `
      flex-direction: column;

      ${TextContext} {
        margin-top: 0;
      }

      ${ImageContainer} {
        margin-top: 60px;
      }
    `}
  }
`

export const ItemTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 34px;
  text-align: center;
`

export const ItemDescription = styled.p`
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 24px;
  text-align: center;

  margin-top: 22px;
`

export const Arrow = styled.div`
  &::before {
    display: none;
  }

  &.slick-prev,
  &.slick-next {
    top: 106px;
    z-index: 2;
  }

  &.slick-prev {
    left: 0;
  }
  &.slick-next {
    right: 0;
  }
`

export const ArrowImage = styled.img`
  ${({ isPrev }) =>
    isPrev &&
    `
    transform: rotate(180deg);
  `}
`
