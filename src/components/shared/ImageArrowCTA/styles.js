import styled from "styled-components"

import { Link } from "gatsby"

import { device } from "../../../consts/deviceSizes"

export const ImageArrowCTA = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: 2em;
`

export const Image = styled.img`
  display: block;
  max-width: 220px;
  max-height: 53px;

  object-fit: contain;

  margin-right: 1em;

  @media ${device.laptop} {
    width: auto;
    max-width: 300px;
  }
`

export const Arrow = styled.svg`
  width: 24px;
  height: 24px;
`
