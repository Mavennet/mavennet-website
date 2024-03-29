import React from "react"

import SvgDivider from "../../shared/SvgDivider"
import Container from "../../base/Container"

import * as S from "./styles"

const PrinciplesSection = ({ principlesList }) => {
  const getPrinciplesList = principles => {
    return (
      <S.PrinciplesList>
        {principles.map(({ item: principle }) => {
          const { image, title, description } = principle

          return (
            <S.ListItem key={title}>
              <S.PrincipleItem>
                <S.Image src={image} alt={title} data-aos="fade-up" />
                <S.TextContent>
                  <S.PrincipleTitle>{title}</S.PrincipleTitle>
                  <S.PrincipleDescription>{description}</S.PrincipleDescription>
                </S.TextContent>
              </S.PrincipleItem>
            </S.ListItem>
          )
        })}
      </S.PrinciplesList>
    )
  }

  return (
    <S.PrinciplesSection>
      <SvgDivider bottom="0" />
      <Container center>
        <S.Title>Our Principles</S.Title>
        {getPrinciplesList(principlesList)}
      </Container>
    </S.PrinciplesSection>
  )
}

export default PrinciplesSection
