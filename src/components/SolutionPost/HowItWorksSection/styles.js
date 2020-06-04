import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const HowItWorksSection = styled.section`
  @media ${device.laptop} {
    background-color: var(--c-p-selago);

    padding: 4.625em 0 5.3125em;
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;

  @media ${device.laptop} {
    font-size: 3rem;
  }
`

export const List = styled.ul`
  margin-top: 3.75em;

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    margin-top: 5.75em;
  }
`

export const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 3.75em;
  }

  @media ${device.laptop} {
    margin-top: 0 !important;
    width: 30%;
  }
`

export const Card = styled.div`
  text-align: center;
`

export const Image = styled.img`
  display: block;
  width: 100%;

  margin: 0 auto;

  max-width: 232px;
`

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 29px;

  margin-top: 2em;

  color: var(--c-p-royal-purple);
`

export const Description = styled.p`
  font-size: 1rem;
  line-height: 27px;
  font-weight: 400;

  margin-top: 0.5em;
`
