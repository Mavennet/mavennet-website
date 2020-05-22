import React from "react"

import Container from "../../base/Container"
import ContactUsForm from "../ContactUsForm"

import * as S from "./styles"

const FormSection = () => {
  const onSubmitForm = data => alert(JSON.stringify(data, null, 2))

  return (
    <S.FormSection>
      <Container center>
        <ContactUsForm onSubmit={onSubmitForm} />
      </Container>
    </S.FormSection>
  )
}

export default FormSection
