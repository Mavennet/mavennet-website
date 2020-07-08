import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const AwardsSection = styled.section`
  padding: 40px 0;

  @media ${device.laptop} {
    padding: 60px 60px 0;
    margin-bottom: -65px;
  }
`

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 0.25px;
  line-height: 56px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 48px;
    line-height: 58px;
  }
`

export const AwardsList = styled.ul`
  margin-top: 60px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media ${device.mobileL} {
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
  }

  @media ${device.tablet} {
    flex-wrap: nowrap;
  }
`

export const AwardImage = styled.img`
  display: block;

  max-height: 66px;
  height: auto;

  max-width: 100%;
  transition: all 0.25s ease-in-out 0s;

  margin: 0 auto;
`

export const AwardText = styled.p`
  opacity: 0;
  visibility: hidden;
  align-self: flex-start;

  transform: translateY(10px);
  transition: all 0.25s ease-in-out 0s;
`

export const ImageWrapper = styled.div`
  width: 100%;
  transition: all 0.25s ease-in-out 0s;
  min-height: 66px;
  display: flex;
  align-items: center;
`

export const Award = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 45%;
  margin: 21px 2.5%;

  @media ${device.tablet} {
    width: 30%;
    margin: 21px 1.5%;
  }

  @media ${device.laptop} {
    margin: 21px 14px;
  }

  &:hover {
    ${AwardText} {
      opacity: 1;
      visibility: visible;
      transform: translateY(-25px);
    }

    ${ImageWrapper} {
      transform: translateX(-50%);
    }

    ${AwardImage} {
      transform: scale(0.5) translate(50%, -45px);
    }
  }
`
