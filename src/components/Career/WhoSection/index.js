import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const colors = ["--c-p-selago-dark", "--c-s-iceberb", "--c-s-fog"]
const frameColors = [
  "--c-p-medium-purple",
  "--c-s-aqua-island",
  "--c-s-portage-light",
  "",
]

const WhoSection = ({ title, subtitle, reasonsList }) => {
  const getQualityList = qualities => (
    <S.QualityList>
      {qualities.map(({ item }, index) => {
        const { description, image } = item
        return (
          <S.ListItem key={description}>
            <S.Quality isEven={index % 2 === 0}>
              <S.ImageContainer
                isEven={index % 2 === 0}
                color={colors[index % colors.length]}
              >
                <S.Image src={image} />
              </S.ImageContainer>
              <S.Content color={frameColors[index % frameColors.length]}>
                <S.Description>{description}</S.Description>
              </S.Content>
            </S.Quality>
          </S.ListItem>
        )
      })}
    </S.QualityList>
  )
  return (
    <S.WhoSection>
      <Container center>
        <S.Title>{title}</S.Title>
        <S.Title>{subtitle}</S.Title>
        {getQualityList(reasonsList)}
      </Container>
    </S.WhoSection>
  )
}

export default WhoSection
