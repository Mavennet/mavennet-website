import React, { createRef, forwardRef, useEffect } from "react"

import * as S from "./styles"

const EventItem = ({ title, subtitle, logo, alt }) => (
  <S.Event>
    <S.ColLogo>
      <S.Logo
        src={require(`../../../assets/images/timeline/${logo}`)}
        alt={alt}
      />
    </S.ColLogo>
    <S.TextContent>
      <S.Title>{title}</S.Title>
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    </S.TextContent>
  </S.Event>
)

const TimelineYear = ({ year, yearImage, events, active }, ref) => {
  return (
    <S.TimelineYear ref={ref}>
      <S.Header>
        <S.Year>{year}</S.Year>
        <S.Image
          src={require(`../../../assets/images/timeline/${yearImage}`)}
          alt={year}
        />
      </S.Header>
      <S.EventList>
        {events.map(event => (
          <EventItem {...event} />
        ))}
      </S.EventList>
    </S.TimelineYear>
  )
}

const TimelineYearRef = forwardRef(TimelineYear)

const TimelineList = ({ events, activeYear }) => {
  const refs = {}
  refs["2018"] = React.createRef()
  refs["2019"] = React.createRef()
  refs["2020"] = React.createRef()

  const listScrollRef = React.createRef()

  useEffect(() => {
    var topPos = refs[activeYear].current.offsetTop
    listScrollRef.current.scrollTop = topPos - 20
  }, [activeYear, refs, listScrollRef])

  return (
    <S.TimelineList ref={listScrollRef}>
      {Object.entries(events).map(([key, content]) => (
        <TimelineYearRef
          ref={refs[key]}
          active={activeYear === key}
          year={key}
          {...content}
        />
      ))}
    </S.TimelineList>
  )
}

export default TimelineList
