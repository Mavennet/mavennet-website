import styled from "styled-components"

import Button from "../../shared/Button"

import { device } from "../../../consts/deviceSizes"

export const DemoSectionBg = styled.section`
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;

  padding: 5.3125em 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 100%;
  max-width: 946px;
  display: block;
`

export const Title = styled.h3`
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 2.5em;
    font-weight: bold;
    line-height: 48px;
    max-width: 800px;
  }
`

export const DemoButton = styled(Button)`
  margin-top: 2.625em;

  @media ${device.laptop} {
    margin-top: 3em;
  }
`
