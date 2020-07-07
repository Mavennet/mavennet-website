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
    top: ${props => props.tabletTop};
  }

  @media ${device.desktop} {
    top: ${props => props.desktopTop};
  }

  ${({ main, desktopTop }) =>
    main &&
    `
        @media (min-width: 1020px) {
          top: ${desktopTop};
        }
    `}
`

export const CustomContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
`

export const BackgroundImage = styled.img`
  max-width: 100%;
  height: auto;

  @media ${device.laptop} {
    width: 100%;
  }
`

export const Slogan = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;
  text-align: center;

  max-width: 853px;

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

  @media ${device.laptop} {
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 64px;
    text-align: center;
  }
`

export const ContactUsButton = styled(Button)`
  margin-top: 2.5em;
`

export const RocketImage = styled.img`
  display: block;
  width: 45%;
  max-width: 100%;
  height: auto;

  margin: 0 auto;
`
