import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const WhoSection = styled.section`
  padding: 3.125em 0;
  overflow: hidden;

  @media ${device.laptop} {
    padding: 5.125em 0 8.125em;
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;
  text-align: center;

  @media ${device.laptop} {
    line-height: 58px;
  }
`

export const QualityList = styled.ul`
  margin-top: 3.5625em;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    margin-top: 5em;
  }
`

export const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 6.25em;
  }

  @media ${device.laptop} {
    &:not(:first-child) {
      margin-top: 11.25em;
    }
  }
`

export const Quality = styled.div`
  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${props => (props.isEven ? "row" : "row-reverse")};
  }
`

export const ImageContainer = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: calc(100vw + 15%);
    left: -15%;
    height: 200px;
    top: 25%;
    -webkit-transform: ${props =>
    props.isEven ? "skewY(-8deg)" : "skewY(8deg)"};
    -ms-transform: ${props => (props.isEven ? "skewY(-8deg)" : "skewY(8deg)")};
    transform: ${props => (props.isEven ? "skewY(-8deg)" : "skewY(8deg)")};
    background-color: var(${props => props.color});
  }

  @media ${device.laptop} {
    width: 60%;
    max-width: 680px;

    &::before {
      width: 105%;
      height: 80%;
      top: 35%;
      ${({ isEven }) =>
    isEven
      ? `
        left: 3%;
      `
      : `

        left: -6%;
      `};
    }
  }
`

export const Image = styled.img`
  position: relative;
  display: block;
  max-width: 100%;
  height: auto;
  z-index: 2;
`

export const Content = styled.div`
  position: relative;
  margin-top: 6em;
  padding: 3.6875em 1.4375em 2.75em 2.6875em;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 25%;
    height: 15%;
  }

  &::before {
    top: 0;
    left: 0;
    border-top: 5px solid var(${props => props.color});
    border-left: 5px solid var(${props => props.color});
  }

  &::after {
    bottom: 0;
    right: 0;
    border-bottom: 5px solid var(${props => props.color});
    border-right: 5px solid var(${props => props.color});
  }

  @media ${device.laptop} {
    margin-top: 0;
    width: 25%;
  }
`

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 29px;
`
