import React from "react"

import StoryTimeline from "../../shared/StoryTimeline"

import { TimelineContent } from "../../../content/timeline"

import * as S from "./styles"

const TimeLineSection = () => {
  return (
    <S.TimeLineSection>
      <S.TimeLineContainer>
        <S.Title>Our Story</S.Title>
        <S.Content>
          <StoryTimeline timelineData={TimelineContent} />
        </S.Content>
      </S.TimeLineContainer>
    </S.TimeLineSection>
  )
}

export default TimeLineSection
