import React from "react"

import ContactUsForm from "../ContactUsForm"

import * as S from "./styles"

const FormSection = () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = values => {
    const formData = {}
    Object.keys(values).map(key => (formData[key] = values[key]))

    const axiosOptions = {
      url: this.props.location.pathname,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }
    axios(axiosOptions)
      .then(response => {
        alert(response)
      })
      .catch(err => alert(response))
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
