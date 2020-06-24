import styled from "styled-components"

import GenericMainSection from "../GenericMainSection"

export const StoryTimeline = styled(GenericMainSection)`
  z-index: 0;

  padding: 0 0 8.5em 3.5em;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const ColumnTimelineTree = styled.div`
  width: 30%;
  min-width: 340px;
`

export const ColumnContent = styled.div`
  width: 100%;
`
