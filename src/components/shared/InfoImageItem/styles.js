import styled from "styled-components"

import Button from "../Button"

import { device } from "../../../consts/deviceSizes"

export const InfoImageItem = styled.div`
  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({ reverse }) =>
      reverse &&
      `
      flex-direction: row-reverse;
    `}
  }
`

export const Column = styled.div`
  @media ${device.laptop} {
    width: 45%;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;

  max-width: 400px;
  margin: 0 auto;

  @media ${device.laptop} {
    ${({ reverse }) => (reverse ? "margin-right: 0;" : "margin-left: 0;")}

    max-width: 450px;
  }

  @media ${device.desktop} {
    ${({ imgMaxWidth }) =>
      imgMaxWidth &&
      `
      max-width: ${imgMaxWidth};
    `}
  }
`

export const TextContent = styled.div``

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;

  margin-top: 1.425em;

  @media ${device.laptop} {
    margin-top: 0;

    font-size: 3rem;
    font-weight: bold;
    line-height: 58px;
  }
`

export const Description = styled.p`
  font-size: 1rem;
  line-height: 24px;

  margin-top: 1.875em;
`

export const CompaniesLogo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  margin-top: 14px;
`

export const CompanyLogo = styled.img`
  height: auto;
  max-height: 46px;
  max-width: 167px;

  margin: 20px 30px 0 0;
`

export const CTAButton = styled(Button)`
  margin-top: 2.5em;
`
