import styled from "styled-components"

import GenericMainSection from "../../shared/GenericMainSection"
import TextArrowCTA from "../../shared/TextArrowCTA"

import { device } from "../../../consts/deviceSizes"

export const Section = styled.section`
  text-align: center;

  padding: 2.1875em 0;
`

export const Title = styled.h2`
  color: var(--c-p-haiti);
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 0.25px;
  line-height: 56px;

  @media ${device.laptop} {
    font-size: 48px;
    letter-spacing: 0;
    line-height: 64px;
    text-align: center;
  }
`

export const Description = styled.p`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 34px;
  text-align: center;

  margin: 20px auto 0;

  max-width: 790px;
`

export const StepsSection = styled(GenericMainSection)`
  margin-top: 3.4375em;

  padding: 25px 0 49px;

  background-color: var(--c-p-selago);

  @media ${device.laptop} {
    margin-top: 4.3125em;
    padding: 33px 0 93px;
  }
`

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const ListItem = styled.li`
  margin-top: 60px;

  @media ${device.laptop} {
    margin-top: 0 !important;
  }
`

export const Arrow = styled.img`
  display: none;
  width: 100%;
  max-width: 120px;

  margin-top: 90px;

  ${({ reverse }) =>
    reverse &&
    `
    transform: scaleY(-1);
  `}

  @media ${device.laptop} {
    padding: 0 10px;
  }

  @media ${device.laptopL} {
    display: block;
  }
`

export const CTAContainer = styled.div`
  margin: 3em auto 0 auto;

  width: fit-content;
`
export const CTA = styled(TextArrowCTA)`
  @media ${device.laptop} {
    font-family: Barlow;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 29px;
  }
`
