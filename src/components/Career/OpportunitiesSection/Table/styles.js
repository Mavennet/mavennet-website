import styled from "styled-components"

import TextArrowCTA from "../../../shared/TextArrowCTA"

import { device } from "../../../../consts/deviceSizes"

export const Table = styled.table`
  display: block;
  border-collapse: collapse;
  border-spacing: 0;
`

export const Head = styled.thead`
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`

export const Body = styled.tbody`
  display: block;
  width: 100%;
`

export const Row = styled.tr`
  box-sizing: border-box;
  width: 100%;
  padding: 1em 1.875em;
  background-color: var(--c-p-alabaster);

  display: flex;
  justify-content: space-between;

  &:nth-child(odd):not(:only-child) {
    background-color: var(--c-p-selago-dark);
  }

  @media ${device.laptop} {
    display: block;
  }
`

export const Header = styled.th`
  text-align: left;
  display: inline-block;

  @media ${device.laptop} {
    width: 20%;

    &:first-child {
      width: 30%;
    }
  }
`

export const Cell = styled.td`
  font-size: 1rem;
  line-height: 27px;

  display: block;

  &:not(:first-child):not(:last-child) {
    display: none;
  }

  @media ${device.laptop} {
    display: inline-block !important;

    width: 20%;
    &:first-child {
      width: 30%;
    }

    &:last-child {
      width: 25%;
    }
  }
`

export const NoOpportunitiesText = styled.p`
  font-size: 1rem;
  line-height: 27px;
  text-align: center;
  background-color: var(--c-p-selago-dark);

  padding: 1em 1.875em;
`

export const CTA = styled(TextArrowCTA)`
  margin: 0 0 0 auto;
`
