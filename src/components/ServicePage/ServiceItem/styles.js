import styled from "styled-components"

import Button from "../../shared/Button"

import { device } from "../../../consts/deviceSizes"

export const ServiceItem = styled.div`
  ${({ hasPaddingLeft }) =>
    hasPaddingLeft &&
    `
    padding-left: 2em;
  `}
`

export const ServiceTitle = styled.h2`
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;
`

export const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 27px;

  margin-top: 1.5625em;
`

export const StepsList = styled.ul`
  margin-top: 1.7395em;
`

export const Step = styled.li`
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  &:not(:first-child) {
    margin-top: 1.1875em;
  }
`

export const CTAButton = styled(Button)`
  margin-top: 2.5em;
`
