import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const ModelSection = ({ title, modelList }) => {
  const getModelList = models => (
    <S.ModelList>
      {models.map(({ item }) => {
        const { title, description, image } = item
        return (
          <S.ListItem key={title}>
            <S.Model>
              <S.ImageWrapper>
                <S.ModelImage src={image} alt={title} />
              </S.ImageWrapper>
              <S.TextContent>
                <S.ModelTitle>{title}</S.ModelTitle>
                <S.ModelDescription>{description}</S.ModelDescription>
              </S.TextContent>
            </S.Model>
          </S.ListItem>
        )
      })}
    </S.ModelList>
  )
  return (
    <S.ModelSection>
      <Container>
        <S.Title>{title}</S.Title>
        {getModelList(modelList)}
      </Container>
    </S.ModelSection>
  )
}

export default ModelSection
