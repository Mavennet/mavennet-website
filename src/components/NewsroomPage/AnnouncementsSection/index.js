import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const AnnouncementsSection = ({ announcements, title, ctaText }) => {
  const getAnnouncementsList = announcementsList => {
    return (
      <S.AnnouncementsList>
        {announcementsList.map((announcement, index) => {
          const item = announcement.node.frontmatter
          return (
            <S.AnnouncementItem first={index === 0}>
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
                  <S.CardDate>
                    {new Date(item.date).toLocaleString("default", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </S.CardDate>
                </S.Content>
              </S.AnnouncementCard>
            </S.AnnouncementItem>
          )
        })}
      </S.AnnouncementsList>
    )
  }

  return (
    <S.AnnoucementsSection>
      <Container>
        <S.Title>{title}</S.Title>
        {getAnnouncementsList(announcements)}
        <S.CTA text={ctaText} to="/" />
      </Container>
    </S.AnnoucementsSection>
  )
}

export default AnnouncementsSection
