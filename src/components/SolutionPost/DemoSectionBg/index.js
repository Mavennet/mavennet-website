import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const DemoSectionBg = ({ title, ctaText, image, backgroundImage }) => {
  return (
    <S.DemoSectionBg background={backgroundImage} data-aos="fade-up">
      <Container>
        <S.Content>
          <S.Image src={image} alt={title} />
          <S.Title>{title}</S.Title>
          <S.DemoButton text={ctaText} to="/contact-us" />
        </S.Content>
      </Container>
    </S.DemoSectionBg>
  )
}

export default DemoSectionBg
