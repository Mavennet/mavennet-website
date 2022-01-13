import styled from "styled-components"

import Container from "../../base/Container"
import TextArrowScroll from "../../shared/TextArrowScroll"

import { device } from "../../../consts/deviceSizes"
import ReactPlayer from "react-player"

export const WhoWeAre = styled.section`
  padding: 2.375em 0;

  @media ${device.tablet} {
    padding: 4.375em 0;
  }
`

export const SectionContainer = styled(Container)`
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 48px;
  }
`

export const TextContent = styled.div`
  box-sizing: border-box;
  @media ${device.laptop} {
    width: 50%;
    padding-right: 3em;
  }
`

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 219px;
  width: 347px;

  margin-top: 54px;

  @media ${device.laptop} {
    width: 50%;
    height: auto;
    margin-top: 0;
  }
`

export const VideoReactPlayer = styled(ReactPlayer)`
  @media ${device.laptop} {
    height: 269px;
    width: 424px;
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
    letter-spacing: 0;
    line-height: 64px;
  }
`

export const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 34px;

  text-align: left;

  margin-top: 14px;

  @media ${device.laptop} {
    font-size: 34px;
    font-weight: 600;
    letter-spacing: 0.25px;
    line-height: 41px;
  }
`

export const Description = styled.p`
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 24px;

  margin-top: 14px;

  @media ${device.laptop} {
    font-size: 16px;
    letter-spacing: 0.25px;
    line-height: 24px;
    text-align: left;

    margin-top: 22px;
  }
`

export const CTA = styled(TextArrowScroll)`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 29px;

  margin-top: 14px;
`
