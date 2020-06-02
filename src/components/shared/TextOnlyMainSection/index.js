import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const TextOnlyMainSection = ({
  title,
  description,
  ctaText,
  to,
  background,
}) => {
  return (
    <S.MainSection background={background}>
      <Container>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        {ctaText && <S.MainButton text={ctaText} to={to} />}
      </Container>
    </S.MainSection>
  )
}

export default TextOnlyMainSection
