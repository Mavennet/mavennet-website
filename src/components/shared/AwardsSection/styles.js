import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const AwardsSection = styled.section`
  padding: 40px 0;

  @media ${device.laptop} {
    padding: 60px;
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
  flex-wrap: wrap;
`

export const Award = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 45%;
  max-height: 66px;
  margin: 21px 2.5%;

  @media ${device.tablet} {
    width: 30%;
    margin: 21px 1.5%;
  }

  @media ${device.laptop} {
    margin: 21px 14px;
    max-width: 150px;
  }
`

export const AwardImage = styled.img`
  display: block;

  max-width: 100%;
  max-height: 66px;
  height: auto;
`
