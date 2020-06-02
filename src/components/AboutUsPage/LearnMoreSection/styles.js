import styled from "styled-components"

import TextArrowCTA from "../../shared/TextArrowCTA"

import { device } from "../../../consts/deviceSizes"

export const LearnMoreSection = styled.section`
  padding: 3.625em 0 5.625em;
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;
  text-align: center;
`

export const LinksList = styled.ul`
  margin-top: 3.125em;

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 1.75em;
  }

  @media ${device.laptop} {
    margin-top: 0 !important;
    width: 30%;
  }
`

export const LinkItem = styled.div``

export const LinkCTA = styled(TextArrowCTA)`
  font-size: 2.125em !important;
  margin-top: 0;
`

export const LinkDescription = styled.p`
  display: none;

  font-size: 1rem;
  line-height: 27px;
  font-weight: 400;

  margin-top: 1.1em;

  @media ${device.laptop} {
    display: block;
  }
`
