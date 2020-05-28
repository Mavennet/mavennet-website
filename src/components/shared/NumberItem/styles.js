import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const NumberItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`

export const Image = styled.img`
  display: block;
  width: 80%;

  max-width: 118px;
`

export const Number = styled.span`
  display: block;
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;
  text-align: center;

  margin-top: 0.2em;

  @media ${device.desktop} {
    font-size: 2.5em;
  }
`

export const Description = styled.p`
  font-size: 1rem;
  line-height: 27px;
  text-align: center;

  margin-top: 1em;
`