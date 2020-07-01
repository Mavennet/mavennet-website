import styled from "styled-components"

import GenericMainSection from "../GenericMainSection"

import { device } from "../../../consts/deviceSizes"

export const StoryTimeline = styled(GenericMainSection)`
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 100px;
  @media ${device.laptop} {
    z-index: 0;

    padding: 0 0 8.5em 3.5em;
    flex-direction: row;
  }
`

export const ColumnTimelineTree = styled.div`
  width: 30%;
  min-width: 340px;
`

export const ColumnContent = styled.div`
  width: 100%;
  margin-top: 2em;

  @media ${device.laptop} {
    margin-top: 0;
  }
`
