import React from "react"

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

const TimelineYear = ({ year, yearImage, events }) => {
  return (
    <S.TimelineYear>
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

const TimelineList = ({ events }) => {
  return (
    <S.TimelineList>
      {Object.entries(events).map(([key, content]) => (
        <TimelineYear year={key} {...content} />
      ))}
    </S.TimelineList>
  )
}

export default TimelineList
