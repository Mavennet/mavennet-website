import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

import TextArrowCTA from "../../shared/TextArrowCTA"

export const RAndDSection = styled.section`
  padding: 53px 0;

  @media ${device.laptopL} {
    padding-bottom: 86px;
  }
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

    @media ${device.laptopL} {
      display: block;
    }
  }
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

export const ItemWrapper = styled.div`
  @media ${device.laptopL} {
    width: 25%;
    display: flex;
    align-items: center;
  }
`

export const Line = styled.img`
  width: 50%;
  height: 280px;
  display: none !important;

  margin: 0 -20%;

  ${({ isReverse }) =>
    isReverse &&
    `
    transform: scaleX(-1);
  `}

  @media ${device.laptopL} {
    display: block !important;
  }
`

export const Item = styled.div`
  display: flex !important;
  flex-direction: column-reverse;
  align-items: center;
  position: relative;

  @media ${device.laptopL} {
    width: 90%;
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
    `};
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

export const CTA = styled(TextArrowCTA)`
  margin-top: 50px;
  @media ${device.laptopL} {
    margin-top: 78px;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 29px;
  }
`
