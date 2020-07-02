import React from "react"

import Swal from "sweetalert2"

import ContactUsForm from "../ContactUsForm"

import * as S from "./styles"

const FormSection = () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const onSubmit = (values, actions) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-us", ...values }),
    })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "We have received your contact!",
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
