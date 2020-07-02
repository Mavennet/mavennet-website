import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const SummarySection = styled.section`
  padding-bottom: 5em;

  @media ${device.tablet} {
    padding-top: 5em;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Content = styled.div`
  ${({ marginTop }) =>
    marginTop &&
    `
      margin-top: ${marginTop};
    `}

  @media ${device.laptop} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: 0;
  }
`

export const Wrapper = styled.div`
  ${({ marginTop }) =>
    marginTop &&
    `
      margin-top: ${marginTop};
    `}

  @media ${device.laptop} {
    width: ${props => (props.width ? props.width : "100%")};
    margin-top: 0;
  }
`

export const TextContent = styled.div`
  margin-top: 2.4375em;

  @media ${device.laptop} {
    margin-top: 0;

    ${({ center }) =>
      center &&
      `
      text-align: center;
    `}
  }
`

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 0.25px;
  line-height: 56px;
`

export const Description = styled.p`
  font-size: 1rem;
  line-height: 27px;

  margin-top: 1.5625em;
`

export const ImageWrapper = styled.div`
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: ${props =>
      props.tabletMaxWidth ? props.tabletMaxWidth : "229px"};
  }

  @media ${device.laptop} {
    max-width: ${props => (props.maxWidth ? props.maxWidth : "268px")};
  }

  @media ${device.laptopL} {
    max-width: unset;
  }
`

export const Image = styled.img`
  width: 100%;
  display: block;
  max-height: 300px;
  object-fit: contain;
`

export const ItemsList = styled.ul`
  @media ${device.laptop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const ListItem = styled.li`
  margin-top: 2.125em;

  @media ${device.laptop} {
    width: "100%";
  }
`
