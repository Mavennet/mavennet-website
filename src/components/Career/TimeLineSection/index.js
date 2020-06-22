import React from "react"

import HistoryTimeline from "../../shared/HistoryTimeline"

import { TimelineContent } from "../../../content/timeline"

import * as S from "./styles"

const TimeLineSection = () => {
  return (
    <S.TimeLineSection>
      <S.TimeLineContainer>
        <S.Title>Our Story</S.Title>
        <S.Content>
          <HistoryTimeline timelineData={TimelineContent} />
        </S.Content>
      </S.TimeLineContainer>
    </S.TimeLineSection>
  )
}

export default TimeLineSection
