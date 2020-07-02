import React, { forwardRef } from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const AwardsSection = ({ title, awards }, ref) => {
  const getAwardsList = awardsList => {
    return (
      <S.AwardList>
        {awardsList.map((item, index) => {
          const award = item.node.frontmatter

          return (
            <S.AwardItem key={award.title} position={index}>
              <S.AwardCard
                href={award.link}
                target="__blank"
                isFirst={index === 0}
              >
                <S.AwardTitle isFirst={index === 0}>{award.title}</S.AwardTitle>
                <S.ImageWrapper>
                  <S.Image
                    position={index}
                    src={award.image}
                    alt={award.title}
                  />
                </S.ImageWrapper>
              </S.AwardCard>
            </S.AwardItem>
          )
        })}
      </S.AwardList>
    )
  }

  return (
    <S.AwardsSection ref={ref}>
      <Container center>
        <S.Title>{title}</S.Title>
        {getAwardsList(awards)}
      </Container>
    </S.AwardsSection>
  )
}

export default forwardRef(AwardsSection)
