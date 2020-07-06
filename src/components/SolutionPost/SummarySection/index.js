import React from "react"

import Container from "../../base/Container"

import CheckIconText from "../../shared/CheckIconText"

import * as S from "./styles"

const SummarySection = ({
  summaryType,
  title,
  image,
  description,
  itemsText,
}) => {
  const getSummaryByType = type => {
    return (
      <>
        <S.Header>
          <S.Wrapper width="45%">
            <S.TextContent>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>
            </S.TextContent>
          </S.Wrapper>
          <S.Wrapper width="45%">
            <S.Content marginTop="3em">
              {type === "pictureItems" ? (
                <S.ImageWrapper maxWidth="100%" tabletMaxWidth="400px">
                  <S.Image src={image} alt={title} />
                </S.ImageWrapper>
              ) : (
                itemsText && (
                  <S.ItemsList>
                    {itemsText.map(item => (
                      <S.ListItem key={item} width="45%">
                        <CheckIconText text={item} />
                      </S.ListItem>
                    ))}
                  </S.ItemsList>
                )
              )}
            </S.Content>
          </S.Wrapper>
        </S.Header>
      </>
    )
  }

  return (
    <S.SummarySection>
      <Container center>{getSummaryByType(summaryType)}</Container>
    </S.SummarySection>
  )
}

export default SummarySection
