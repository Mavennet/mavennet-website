import styled from "styled-components"

import TextArrowCTA from "../../shared/TextArrowCTA"
import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const ShowCaseSection = styled.div`
  position: relative;
  background-color: #f1e7fc;

  padding: 3em 0;

  @media ${device.laptop} {
    margin-top: 3em;

    padding: 0 0 6em;
  }
`

export const SectionContainer = styled(Container)``

export const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  line-height: 58px;
  text-align: center;
`

export const List = styled.ul`
  margin-top: 96px;

  @media ${device.laptop} {
    display: flex;
    justify-content: space-space-between;
    align-items: center;
    margin-top: 60px;
  }
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  text-align: center;

  &:not(:first-child) {
    margin-top: 3em;
  }

  @media ${device.laptop} {
    box-sizing: border-box;
    margin-top: 0 !important;
    padding-right: 2.5em;
    flex-direction: row;
    width: 50%;

    text-align: left;
  }
`

export const Col = styled.div`
  ${({ text }) =>
    text &&
    `
    margin-top: 2em;
  `}

@media ${device.laptop} {
  padding-left: ${({ text }) => (text ? "2em" : "0")};
  width: ${({ text }) => (text ? "60%" : "40%")};
}
`

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  max-height: 170px;

  margin: 0 auto;
`

export const ItemTitle = styled.h3`
  font-size: 34px;
  font-weight: 600;
  letter-spacing: 0.25px;
  line-height: 41px;
`

export const ItemDescription = styled.p`
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 24px;

  margin-top: 26px;
`

export const CTA = styled(TextArrowCTA)`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 29px;

  margin: 23px auto 0;

  @media ${device.laptop} {
    margin: 23px auto 0 0;
  }
`
