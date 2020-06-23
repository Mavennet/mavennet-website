import React, { useState } from "react"

import HistoryTimelineTree from "../HistoryTimelineTree"

import * as S from "./styles"

const HistoryTimeline = ({ timelineData }) => {
  const [selectedYear, setSelectedYear] = useState("2018")
  return (
    <S.StoryTimeline backgroundColor="--c-p-selago">
      <S.ColumnTimelineTree>
        <HistoryTimelineTree
          events={timelineData}
          onSelectYear={setSelectedYear}
          activeYear={selectedYear}
        />
      </S.ColumnTimelineTree>
      <S.ColumnContent>Hello</S.ColumnContent>
    </S.StoryTimeline>
  )
}

export default HistoryTimeline
