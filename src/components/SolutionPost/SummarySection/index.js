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
  console.log(image)
  const getSummaryByType = type => {
    if (type === "regular") {
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
              <S.ImageWrapper>
                <S.Image src={image} alt={title} />
              </S.ImageWrapper>
            </S.Wrapper>
          </S.Header>
          <S.Content>
            <S.ItemsList>
              {itemsText.map(item => (
                <S.ListItem key={item} width="45%">
                  <CheckIconText text={item} />
                </S.ListItem>
              ))}
            </S.ItemsList>
          </S.Content>
        </>
      )
    } else if (type === "pictureItems") {
      return (
        <>
          <S.Header>
            <S.TextContent center>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>
            </S.TextContent>
          </S.Header>
          <S.Content marginTop="3.5em">
            <S.Wrapper width="45%">
              <S.ImageWrapper maxWidth="100%" tabletMaxWidth="400px">
                <S.Image src={image} alt={title} />
              </S.ImageWrapper>
            </S.Wrapper>

            <S.Wrapper width="45%" marginTop="4em">
              <S.ItemsList>
                {itemsText.map(item => (
                  <S.ListItem key={item}>
                    <CheckIconText text={item} />
                  </S.ListItem>
                ))}
              </S.ItemsList>
            </S.Wrapper>
          </S.Content>
        </>
      )
    }

    return null
  }

  return (
    <S.SummarySection>
      <Container center>{getSummaryByType(summaryType)}</Container>
    </S.SummarySection>
  )
}

export default SummarySection