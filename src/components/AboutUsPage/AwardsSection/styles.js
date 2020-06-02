import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const AwardsSection = styled.section`
  padding: 5.625em 0;
`
export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;
  text-align: center;
`

export const AwardsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3.125em;
  width: 100%;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;

    margin-top: 4.5em;
  }
`

export const ListItem = styled.li`
  max-width: 242px;
  max-height: 102px;

  &:not(:first-child) {
    margin-top: 3.125em;
  }

  @media ${device.laptop} {
    margin-top: 0 !important;
    margin-right: 1em;
  }
`

export const AwardImage = styled.img`
  display: block;
  width: 100%;

  object-fit: contain;
`
