import React from "react"

import TimelineBubble from "../TimelineBubble"

import * as S from "./styles"

const StoryTimelineTree = ({ onSelectYear, activeYear, events }) => {
  const getEventsIcons = (eventsContent, inSelectedYear) => {
    const { glyph, alt, relevance, bubbleStyle, position } = eventsContent

    return (
      <TimelineBubble
        relevance={relevance}
        bubbleStyle={bubbleStyle}
        alt={alt}
        imagePath={glyph}
        isImageVisible={inSelectedYear}
        position={position}
      />
    )
  }
  return (
    <S.StoryTimelineTree>
      {Object.entries(events).map(([eventYear, eventContent], index) => (
        <S.YearSection
          key={eventYear}
          active={activeYear === eventYear}
          reverse={index % 2 === 0}
        >
          <S.YearCircle onClick={() => onSelectYear(eventYear)}>
            <S.Year>{eventYear}</S.Year>
          </S.YearCircle>
          {/* {console.log(eventContent)} */}
          {eventContent.events &&
            eventContent.events.length > 0 &&
            eventContent.events.map(event =>
              getEventsIcons(event, activeYear === eventYear)
            )}
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
    </S.StoryTimelineTree>
  )
}

export default StoryTimelineTree
