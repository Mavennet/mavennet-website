import styled from "styled-components"

import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const TimeLineSection = styled.section`
  padding-bottom: 5.125em;

  @media ${device.tablet} {
  }
`

export const TimeLineContainer = styled(Container)`
  width: 100%;

  @media ${device.laptop} {
    width: initial;
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;

  text-align: center;

  @media ${device.laptop} {
    font-size: 48px;
    letter-spacing: 0;
    line-height: 64px;
    text-align: center;
  }
`

export const Content = styled.div`
  margin-top: 3.5625em;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media ${device.laptopL} {
    margin-top: 4.875em;
  }
`

export const TimeLine = styled.div`
  @media ${device.laptopL} {
    width: 50%;
  }
`

export const TimeLineItem = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &:not(:last-child) {
    padding-bottom: 2.625em;
  }

  &::before {
    position: absolute;
    content: "";
    top: 27px;
    left: 6px;
    border-left: 2px solid var(${props => props.color});
    height: calc(100% - 27px);
  }

  &:last-child {
    &::before {
      border-left: 2px dashed var(${props => props.color});
      height: 60px;
    }
  }
`

export const TimeLineCircle = styled.div`
  position: relative;
  min-width: 14px;
  width: 14px;
  height: 14px;
  border-radius: 50%;

  margin-top: 8px;
  margin-right: 16px;

  background-color: var(${props => props.color});

  &::before {
    content: "";
    position: absolute;
    top: calc(50% - 12px);
    left: calc(50% - 12px);
    width: 20px;
    height: 20px;
    border-radius: 50%;

    border: 2px solid var(${props => props.color});
  }

  @media ${device.laptopL} {
    margin-right: 20px;
  }
`

export const TimeLineDate = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 29px;

  margin-right: 1.125em;

  @media ${device.laptopL} {
    margin-right: 2.125em;
  }
`

export const TimeLineDescription = styled.p`
  font-size: 1rem;
  line-height: 27px;
  font-weight: 400;
`

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 334px;

  margin-top: 5.4375em;

  @media ${device.laptop} {
    margin-top: 0;
  }
`
