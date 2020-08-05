import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const DemoSectionBg = ({ title, ctaText, image, backgroundImage, demoLink }) => {
  return (
    <S.DemoSectionBg
      background={backgroundImage}
      data-aos="fade-up"
      data-aos-offset="200"
    >
      <Container>
        <S.Content>
          <S.Image src={image} alt={title} />
          <S.Title>{title}</S.Title>
          <S.DemoButton text={ctaText} to="/contact-us" url={demoLink} params="?q=demo" />
        </S.Content>
      </Container>
    </S.DemoSectionBg>
  )
}

export default DemoSectionBg
