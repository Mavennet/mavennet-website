import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const NewsSection = styled.section`
  padding: 3.4375em 0 6.875em;
`

export const Title = styled.h2`
  text-align: center;
`

export const NewsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    flex-wrap: wrap;
  }
`

export const NewsItem = styled.li`
  margin-top: 3.4375em;
`
