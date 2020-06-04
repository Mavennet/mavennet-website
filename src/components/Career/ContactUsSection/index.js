import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const ContactUsSection = ({ title, content }) => {
  return (
    <S.ContactUsSection>
      <Container>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
      </Container>
    </S.ContactUsSection>
  )
}

export default ContactUsSection
