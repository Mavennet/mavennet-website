import React from "react"

import { callContactUs } from "../../../services/contact-us"

import Swal from "sweetalert2"

import ContactUsForm from "../ContactUsForm"

import * as S from "./styles"

const FormSection = () => {
  const onSubmit = (values, actions) => {
    callContactUs(values)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "We've received your message!",
          text: "One of the members of our team will contact you soon!",
          confirmButtonColor: "#964beb",
        })
        actions.resetForm()
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: "Please try again later!",
        })
      })
      .finally(() => actions.setSubmitting(false))
  }

  return (
    <S.FormSection>
      <S.FormSectionContainer center>
        <S.ContactUsText>
          Send us your questions or comments and our team will contact you
          shortly.
        </S.ContactUsText>
        <ContactUsForm onSubmit={onSubmit} />
      </S.FormSectionContainer>
    </S.FormSection>
  )
}

export default FormSection
