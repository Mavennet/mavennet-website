import React, { forwardRef, useEffect } from "react"

import * as S from "./styles"

const EventItem = ({ title, subtitle, logo, alt, logoStyles }) => (
  <S.Event>
    <S.ColLogo>
      <S.Logo
        src={require(`../../../assets/images/timeline/${logo}`)}
        alt={alt}
        style={logoStyles}
      />
    </S.ColLogo>
    <S.TextContent>
      <S.Title>{title}</S.Title>
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    </S.TextContent>
  </S.Event>
)

const TimelineYear = ({ year, yearImage, events }, ref) => {
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
        {events.map((event, index) => (
          <EventItem key={index} {...event} />
        ))}
      </S.EventList>
    </S.TimelineYear>
  )
}

const TimelineYearRef = forwardRef(TimelineYear)

const TimelineList = ({
  events,
  refs,
  listScrollRef,
  isScrolling,
  activeYear,
  setActiveYear,
}) => {
  useEffect(() => {
    const currentScrollRef = listScrollRef.current
    const handleScroll = () => {
      if (isScrolling) return
      const ref2018 = refs["2018"].current
      const ref2019 = refs["2019"].current
      const ref2020 = refs["2020"].current

      const yearsTopAndBottom = {
        "2018": {
          top: ref2018.offsetTop,
          bottom: ref2018.scrollHeight,
        },
        "2019": {
          top: ref2019.offsetTop,
          bottom: ref2019.scrollHeight,
        },
        "2020": {
          top: ref2020.offsetTop,
          bottom: ref2020.scrollHeight,
        },
      }

      const scrollTop = currentScrollRef.scrollTop
      const offSet = 100

      for (let [key, value] of Object.entries(yearsTopAndBottom)) {
        if (
          scrollTop + offSet > value.top &&
          scrollTop + offSet < value.top + value.bottom
        ) {
          if (key !== activeYear) {
            setActiveYear(key)
          }
          break
        }
      }
    }
    currentScrollRef.addEventListener("scroll", handleScroll)

    return () => {
      currentScrollRef.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <S.TimelineList ref={listScrollRef}>
      {Object.entries(events).map(([key, content]) => (
        <TimelineYearRef key={key} ref={refs[key]} year={key} {...content} />
      ))}
    </S.TimelineList>
  )
}

export default TimelineList
