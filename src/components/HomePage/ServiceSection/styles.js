import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const Section = styled.section`
  text-align: center;

  padding: 2.1875em 0;
`

export const Title = styled.h2`
  color: var(--c-p-haiti);
`

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: 3.4375em;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 4.3125em;
  }
`

export const ListItem = styled.li`
  & + & {
    margin-top: 4.375em;
  }

  @media ${device.laptop} {
    margin-top: 0 !important;
  }
`

export const CTAContainer = styled.div`
  margin: 2em auto 0 auto;

  width: fit-content;
`
