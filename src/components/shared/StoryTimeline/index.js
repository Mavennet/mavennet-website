import React, { useState, useRef, createRef } from "react"

import StoryTimelineTree from "../StoryTimelineTree"
import TimelineList from "../TimelineList"

import * as S from "./styles"

const StoryTimeline = ({ timelineData }) => {
  const [selectedYear, setSelectedYear] = useState("2018")
  const [isScrolling, setIsScrolling] = useState(false)

  const refs = {}

  refs["2018"] = useRef(null)
  refs["2019"] = useRef(null)
  refs["2020"] = useRef(null)

  const listScrollRef = useRef(null)

  const handleYearClick = year => {
    listScrollRef.current.scrollTo({
      left: 0,
      top: refs[year].current.offsetTop,
      behavior: "smooth",
    })

    listScrollRef.current.addEventListener("scroll", function load() {
      if (listScrollRef.current.scrollTop === refs[year].current.offsetTop) {
        setIsScrolling(false)
        listScrollRef.current.removeEventListener("scroll", load)
      }
    })
    setIsScrolling(true)

    setSelectedYear(year)
  }

  return (
    <S.StoryTimeline backgroundColor="--c-p-selago">
      <S.ColumnTimelineTree>
        <StoryTimelineTree
          events={timelineData}
          onSelectYear={handleYearClick}
          activeYear={selectedYear}
        />
      </S.ColumnTimelineTree>
      <S.ColumnContent>
        <TimelineList
          events={timelineData}
          setActiveYear={setSelectedYear}
          refs={refs}
          listScrollRef={listScrollRef}
          isScrolling={isScrolling}
          activeYear={selectedYear}
        />
      </S.ColumnContent>
    </S.StoryTimeline>
  )
}

export default StoryTimeline
