import React, { useState } from "react"

import HistoryTimelineTree from "../HistoryTimelineTree"

const HistoryTimeline = ({ timelineData }) => {
  const [selectedYear, setSelectedYear] = useState("2018")
  return (
    <HistoryTimelineTree
      events={timelineData}
      onSelectYear={setSelectedYear}
      activeYear={selectedYear}
    />
  )
}

export default HistoryTimeline
