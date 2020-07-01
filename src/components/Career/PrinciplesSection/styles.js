import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const PrinciplesSection = styled.section`
  padding: 2.375em 0;
  position: relative;
  background-color: var(--c-p-selago);

  @media ${device.laptopL} {
    padding: 5.375em 0 10em;
  }
`

export const Title = styled.h2`
  font-size: 40px;
  letter-spacing: 0.25px;
  line-height: 56px;

  @media ${device.laptop} {
    font-size: 48px;
    line-height: 58px;
    text-align: center;
  }
`

export const PrinciplesList = styled.ul`
  margin-top: 5.4375em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptopL} {
    margin-top: 4.3125em;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 5.8125em;
  }

  @media ${device.laptopL} {
    width: 48%;
    margin-top: 3.8125em !important;
  }
`

export const PrincipleItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptopL} {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 178px;

  @media ${device.laptopL} {
    max-width: 150px;
    margin-right: 3.5em;
  }
`

export const TextContent = styled.div`
  text-align: center;

  margin-top: 2.7em;
  @media ${device.laptopL} {
    text-align: left;
    margin-top: 0;
    padding-right: 50px;
  }
`

export const PrincipleTitle = styled.h3`
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;
`

export const PrincipleDescription = styled.p`
  font-size: 1rem;
  line-height: 27px;
  font-weight: 400;

  margin-top: 1.8em;
`
