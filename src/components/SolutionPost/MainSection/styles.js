import styled from "styled-components"

import GenericMainSection from "../../shared/GenericMainSection"
import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled(GenericMainSection)`
  color: #ffffff;

  padding-top: 9em;
`

export const MainSectionContainer = styled(Container)``

export const Image = styled.img`
  display: block;
  width: 100%;
`

export const Content = styled.div`
  margin-top: 2em;
  padding: 0 1em;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Logo = styled.img`
  width: 80%;
`

export const Title = styled.h1`
  text-align: left;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;

  margin-top: 0.5em;
`
