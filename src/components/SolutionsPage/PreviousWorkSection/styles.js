import styled from "styled-components"

import { Link } from "gatsby"
import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const PreviousWorkSection = styled.section`
  color: var(--c-p-haiti);
  padding: 3em 0;

  @media ${device.laptopL} {
    margin-top: -3em;
    padding: 0 0 12em;
  }
`

export const PreviousWorkContainer = styled(Container)`
  align-items: stretch;
`

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  letter-spacing: -0.13px;
  line-height: 48px;

  text-align: center;
`

export const WorkList = styled.ul`
  margin-top: 1em;

  @media ${device.laptop} {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }
`

export const WorkItem = styled.li``

export const WorkCard = styled(Link)`
  color: var(--c-p-haiti);

  width: 100%;
  max-width: 354px;

  margin-top: 5em;
`

export const Image = styled.img`
  width: 100%;
`

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.08px;
  line-height: 29px;

  margin-top: 1.3em;
`
