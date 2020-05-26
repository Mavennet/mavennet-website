import React from "react"
import axios from "axios"
import * as qs from "query-string"

import ContactUsForm from "../ContactUsForm"

import * as S from "./styles"

const FormSection = () => {
  const onSubmit = values => {
    const formData = {}
    Object.keys(values).map(key => (formData[key] = values[key]))

    const axiosOptions = {
      url: "/",
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }
    axios(axiosOptions)
      .then(response => {
        alert(JSON.stringify(response, null, 2))
      })
      .catch(err => alert(JSON.stringify(err, null, 2)))
  }

  return (
    <S.FormSection>
      <S.FormSectionContainer center>
        <S.ContactUsText>
          Kindly fill in the form with any questions or suggestions you might
          have, and our team will get back to you as soon as we can.
        </S.ContactUsText>
        <ContactUsForm onSubmit={onSubmit} />
      </S.FormSectionContainer>
    </S.FormSection>
  )
}

export default FormSection
