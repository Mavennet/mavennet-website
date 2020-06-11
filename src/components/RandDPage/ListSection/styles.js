import styled from "styled-components"

import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const ListSection = styled.section`
  padding: 3em 0;

  @media ${device.laptop} {
    padding: 0;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`

export const ListItem = styled.li`
  &:not(:first-child) {
    /* margin-top: 4em; */
  }

  @media ${device.laptop} {
    width: 98%;

    align-self: ${props => (props.isEven ? "flex-start" : "flex-end")};
  }

  @media ${device.desktop} {
    width: 90%;
  }
`
