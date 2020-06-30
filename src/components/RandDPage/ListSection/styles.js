import styled from "styled-components"

import Container from "../../base/Container"

import { device } from "../../../consts/deviceSizes"

export const ListSection = styled(Container)`
  padding: 3em 0;
  @media ${device.laptop} {
    padding: 0;
    width: 100%;
    max-width: unset;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`

export const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 6em;
  }

  @media ${device.laptop} {
    margin: 0 auto !important;
    width: 85%;

    align-self: ${props => (props.isEven ? "flex-start" : "flex-end")};
  }

  @media ${device.desktop} {
    width: 83%;
  }
`
