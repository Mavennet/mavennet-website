import React, { forwardRef } from "react"

import Container from "../../base/Container"

import { utcStringToFullMonthDate } from "../../../helpers/dateManipulation"

import * as S from "./styles"

const AnnouncementsSection = ({ announcements, title, ctaText }, ref) => {
  const getAnnouncementsList = announcementsList => {
    return (
      <S.AnnouncementsList>
        {announcementsList.map((announcement, index) => {
          const item = announcement.node.frontmatter
          return (
            <S.AnnouncementItem key={item.title} first={index === 0}>
              <S.AnnouncementCard
                href={item.link}
                target="_blank"
                first={index === 0}
              >
                <S.Header>
                  <S.Image src={item.image} />
                </S.Header>
                <S.Content>
                  <S.CardTitle>{item.title}</S.CardTitle>
                  <S.CardDate>{utcStringToFullMonthDate(item.date)}</S.CardDate>
                </S.Content>
              </S.AnnouncementCard>
            </S.AnnouncementItem>
          )
        })}
      </S.AnnouncementsList>
    )
  }

  return (
    <S.AnnoucementsSection ref={ref}>
      <Container>
        <S.Title>{title}</S.Title>
        {getAnnouncementsList(announcements)}
        {/* <S.CTA text={ctaText} to="/" /> */}
      </Container>
    </S.AnnoucementsSection>
  )
}

export default forwardRef(AnnouncementsSection)
