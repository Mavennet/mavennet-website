import React from "react"

import { useFormik } from "formik"
import * as Yup from "yup"

import TextFieldFormik from "../../shared/TextInputFormik"
import SelectInputFormik from "../../shared/SelectInputFormik"

import * as S from "./styles"

const ContactUsForm = ({ onSubmit }) => {
  const {
    errors,
    touched,
    handleSubmit,
    getFieldProps,
    isSubmitting,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      clientType: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 30 characters or less")
        .required("First Name is Required"),
      lastName: Yup.string().max(15, "Must be 15 characters or less"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Address is Required"),
      company: Yup.string(),
      jobTitle: Yup.string(),
      clientType: Yup.string().required("I am is Required"),
      message: Yup.string(),
    }),
    onSubmit: onSubmit,
  })

  return (
    <S.ContactUsForm
      onSubmit={handleSubmit}
      name="contact-us"
      data-netlify={true}
    >
      <S.Row>
        <S.InputContainer column>
          <TextFieldFormik
            name="firstName"
            label="First Name*"
            touched={touched.firstName}
            errors={errors.firstName}
            formikProps={getFieldProps("firstName")}
          />
        </S.InputContainer>
        <S.InputContainer column>
          <TextFieldFormik
            name="lastName"
            label="Last Name"
            touched={touched.lastName}
            errors={errors.lastName}
            formikProps={getFieldProps("lastName")}
          />
        </S.InputContainer>
      </S.Row>
      <S.Row>
        <S.InputContainer>
          <TextFieldFormik
            name="email"
            label="Email*"
            touched={touched.email}
            errors={errors.email}
            formikProps={getFieldProps("email")}
          />
        </S.InputContainer>
      </S.Row>
      <S.Row>
        <S.InputContainer column>
          <TextFieldFormik
            name="company"
            label="Company"
            touched={touched.company}
            errors={errors.company}
            formikProps={getFieldProps("company")}
          />
        </S.InputContainer>
        <S.InputContainer column>
          <TextFieldFormik
            name="jobTitle"
            label="Job Title"
            touched={touched.jobTitle}
            errors={errors.jobTitle}
            formikProps={getFieldProps("jobTitle")}
          />
        </S.InputContainer>
      </S.Row>
      <S.Row>
        <S.InputContainer>
          <SelectInputFormik
            name="clientType"
            label="I am a..."
            touched={touched.clientType}
            errors={errors.clientType}
            formikProps={getFieldProps("clientType")}
          />
        </S.InputContainer>
      </S.Row>
      <S.Row>
        <S.InputContainer>
          <TextFieldFormik
            name="message"
            label="Tell us a bit more about your inquiries?"
            touched={touched.message}
            errors={errors.message}
            formikProps={getFieldProps("message")}
            multiline
            rows={10}
          />
        </S.InputContainer>
      </S.Row>
      <S.SubmitButton
        text="Submit"
        type="submit"
        width="180px"
        isLoading={isSubmitting}
      />
    </S.ContactUsForm>
  )
}

export default ContactUsForm
