import styled from "styled-components"

import TextArrowCTA from "../../shared/TextArrowCTA"

import { device } from "../../../consts/deviceSizes"

export const OurTeamSection = styled.section`
  padding: 5.625em 0;
  position: relative;
`

export const BackgroundWrapper = styled.div`
  position: relative;
  @media ${device.laptop} {
    padding: 5.125em 0 9.125em;
    background-color: var(--c-p-selago);
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 3rem;
    line-height: 58px;
  }
`

export const TeamList = styled.ul`
  width: 100%;
  margin-top: 3.25em;

  @media ${device.laptop} {
    margin-top: 2.1875em;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`

export const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 3.125em;
  }

  @media ${device.laptop} {
    margin: 3.125em 1.5% 0 1.5% !important;
    width: 30%;
  }

  @media ${device.desktop} {
    width: 23%;
    margin: 3.125em 1% 0 1% !important;
  }
`

export const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Image = styled.img`
  width: 100%;
  max-width: 189px;
`

export const Name = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 29px;
  margin-top: 1.125em;
`

export const Position = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 29px;
  margin-top: 0.25em;
`

export const CTA = styled(TextArrowCTA)`
  margin-left: auto;
  margin-right: auto;

  margin-top: 3.175em;
`
