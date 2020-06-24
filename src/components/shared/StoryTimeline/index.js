import React, { useState } from "react"

import StoryTimelineTree from "../StoryTimelineTree"
import TimelineList from "../TimelineList"

import * as S from "./styles"

const StoryTimeline = ({ timelineData }) => {
  const [selectedYear, setSelectedYear] = useState("2018")
  return (
    <S.StoryTimeline backgroundColor="--c-p-selago">
      <S.ColumnTimelineTree>
        <StoryTimelineTree
          events={timelineData}
          onSelectYear={setSelectedYear}
          activeYear={selectedYear}
        />
      </S.ColumnTimelineTree>
      <S.ColumnContent>
        <TimelineList events={timelineData} />
      </S.ColumnContent>
    </S.StoryTimeline>
  )
}

export default StoryTimeline
