import React from "react"

import * as S from "./styles"

const HistoryTimelineTree = ({ onSelectYear, activeYear, events }) => {
  return (
    <S.HistoryTimelineTree>
      {Object.keys(events).map((eventYear, index) => (
        <S.YearSection
          key={eventYear}
          active={activeYear === eventYear}
          reverse={index % 2 === 0}
        >
          <S.YearCircle onClick={() => onSelectYear(eventYear)}>
            <S.Year>{eventYear}</S.Year>
          </S.YearCircle>
          <S.SVGWrapper>
            <S.SVG
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1={index % 2 === 0 ? "100%" : "0"}
                x2="100%"
                y2={index % 2 === 0 ? "0" : "100%"}
              />
            </S.SVG>
          </S.SVGWrapper>
        </S.YearSection>
      ))}
    </S.HistoryTimelineTree>
  )
}

export default HistoryTimelineTree
