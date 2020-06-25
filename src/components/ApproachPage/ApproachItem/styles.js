import styled from "styled-components"

import Button from "../../shared/Button"
import TextArrowCTA from "../../shared/TextArrowCTA"

import { device } from "../../../consts/deviceSizes"

export const ApproachItem = styled.div`
box-sizing: border-box;
  ${({ hasPaddingLeft }) =>
    hasPaddingLeft &&
    `
    padding-left: 2em;
    
  `}

  @media ${device.laptop} {
    width: 50%;

    ${({ hasPaddingLeft }) =>
      hasPaddingLeft &&
      `
    padding-left: 3em;
    
  `}
  }
`

export const ApproachTitle = styled.h2`
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;

  @media ${device.tablet} {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 48px;
  }
`

export const ApproachDescription = styled.p`
  font-size: 1rem;
  line-height: 27px;

  margin-top: 1.5625em;
`

export const StepsList = styled.ul`
  margin-top: 1.7395em;

  @media ${device.laptop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const Step = styled.li`
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  &:not(:first-child) {
    margin-top: 1.1875em;
  }

  @media ${device.laptop} {
    margin-top: 1em !important;
    width: 50%;
  }
`

export const CTAButton = styled(Button)`
  margin-top: 2.5em;
`

export const TextCTA = styled(TextArrowCTA)`
  margin-top: 2.5em;
`
