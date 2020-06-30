import styled from "styled-components"

import TextArrowCTA from "../../shared/TextArrowCTA"

import { device } from "../../../consts/deviceSizes"

export const NewsSection = styled.section`
  padding: 3.4375em 0 4.875em;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: var(--c-p-selago);

    @media ${device.laptop} {
      transform: skewY(5deg);
    }
  }

  @media ${device.laptop} {
    margin: 60px 0 -5.875em;
    padding-bottom: 9.75em;
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

export const NewsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    flex-wrap: wrap;
  }
`

export const NewsItem = styled.li`
  margin-top: 3.4375em;
  display: inline-block;
`

export const CTAContainer = styled.div`
  margin: 3.175em auto;
  width: fit-content;
`

export const CTA = styled(TextArrowCTA)`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 29px;
`
