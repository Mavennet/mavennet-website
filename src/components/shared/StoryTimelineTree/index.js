import React from "react"

import TimelineBubble from "../TimelineBubble"

import * as S from "./styles"

const MobileTimelineTree = ({ onSelectYear, activeYear, events }) => {
  return (
    <S.MobileTree>
      {Object.entries(events).map(([eventYear, eventContent], index) => (
        <>
          <S.MobileYear
            key={eventYear}
            active={activeYear === eventYear}
            onClick={() => onSelectYear(eventYear)}
          >
            <S.Year>{eventYear}</S.Year>
          </S.MobileYear>
          {index !== Object.entries(events).length - 1 && <S.Divider />}
        </>
      ))}
    </S.MobileTree>
  )
}

const StoryTimelineTree = ({ onSelectYear, activeYear, events, isMobile }) => {
  const getEventsIcons = (eventsContent, inSelectedYear) => {
    const {
      glyph,
      alt,
      relevance,
      bubbleStyle,
      position,
      hiddenBubble,
    } = eventsContent

    return (
      !hiddenBubble && (
        <TimelineBubble
          relevance={relevance}
          bubbleStyle={bubbleStyle}
          alt={alt}
          imagePath={glyph}
          isImageVisible={inSelectedYear}
          position={position}
        />
      )
    )
  }
  return isMobile ? (
    <MobileTimelineTree
      onSelectYear={onSelectYear}
      activeYear={activeYear}
      events={events}
    />
  ) : (
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
