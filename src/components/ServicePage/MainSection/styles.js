import styled from "styled-components"

import Container from "../../base/Container"
import Button from "../../shared/Button"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled.div`
  margin-bottom: -4px;
  position: relative;
`

export const Wrapper = styled.div`
  width: 100%;

  position: absolute;
  top: ${props => props.mobileTop};

  @media ${device.tablet} {
    top: ${props => props.desktopTop};
  }
`

export const CustomContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
`

export const BackgroundImage = styled.img`
  max-width: 100%;
  height: auto;
`

export const Slogan = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 3.375em;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 65px;
    text-align: center;
  }
`

export const ContactUsTitle = styled.h3`
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;
  text-align: center;
`

export const ContactUsButton = styled(Button)`
  margin-top: 2.5em;
`
