import React from "react"

import ContactUsForm from "../ContactUsForm"

import * as S from "./styles"

const FormSection = () => {
  const onSubmitForm = data => alert(JSON.stringify(data, null, 2))

  return (
    <S.FormSection>
      <S.FormSectionContainer center>
        <S.ContactUsText>
          Kindly fill in the form with any questions or suggestions you might
          have, and our team will get back to you as soon as we can.
        </S.ContactUsText>
        <ContactUsForm onSubmit={onSubmitForm} />
      </S.FormSectionContainer>
    </S.FormSection>
  )
}

export default FormSection
