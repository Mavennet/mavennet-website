import React, { forwardRef } from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const MediaSection = ({ media, title, ctaText }, ref) => {
  const { edges: mediaList } = media

  const gridName = ["header1", "header2", "body1", "body2", "body3"]

  const getMediaCards = list => (
    <S.Grid>
      {list.map(({ node }, index) => {
        const mediaItem = node.frontmatter

        return (
          <S.MediaCard
            href={mediaItem.link}
            target="__blank"
            area={gridName[index]}
          >
            <S.CardImage
              src={mediaItem.image}
              alt={mediaItem.title}
              isSmall={index >= 2}
            />
            <S.CardText>{mediaItem.title}</S.CardText>
          </S.MediaCard>
        )
      })}
    </S.Grid>
  )

  return (
    <S.MediaSection ref={ref}>
      <Container center>
        <S.Title>{title}</S.Title>
        {getMediaCards(mediaList)}
        {/* <S.CTA text={ctaText} to="/" /> */}
      </Container>
    </S.MediaSection>
  )
}

export default forwardRef(MediaSection)
