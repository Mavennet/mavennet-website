import React from "react"

import { useFormik } from "formik"
import * as Yup from "yup"

import TextFieldFormik from "../../shared/TextInputFormik"
import SelectInputFormik from "../../shared/SelectInputFormik"

import * as S from "./styles"

const ContactUsForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      contactReason: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 30 characters or less")
        .required("First Name is Required"),
      lastName: Yup.string().max(15, "Must be 15 characters or less"),
      email: Yup.string().email("Invalid email address").required("Required"),
      company: Yup.string(),
      company: Yup.string(),
      contactReason: Yup.string(),
      message: Yup.string(),
    }),
    onSubmit: onSubmit,
  })
  return (
    <S.ContactUsForm onSubmit={formik.handleSubmit}>
      <S.Row>
        <S.InputContainer column>
          <TextFieldFormik
            name="firstName"
            label="First Name*"
            touched={formik.touched.firstName}
            errors={formik.errors.firstName}
            formikProps={formik.getFieldProps("firstName")}
          />
        </S.InputContainer>
        <S.InputContainer column>
          <TextFieldFormik
            name="lastName"
            label="Last Name"
            touched={formik.touched.lastName}
            errors={formik.errors.lastName}
            formikProps={formik.getFieldProps("lastName")}
          />
        </S.InputContainer>
      </S.Row>
      <S.Row>
        <S.InputContainer>
          <TextFieldFormik
            name="email"
            label="Email*"
            touched={formik.touched.email}
            errors={formik.errors.email}
            formikProps={formik.getFieldProps("email")}
          />
        </S.InputContainer>
      </S.Row>
      <S.Row>
        <S.InputContainer column>
          <TextFieldFormik
            name="company"
            label="Company"
            touched={formik.touched.company}
            errors={formik.errors.company}
            formikProps={formik.getFieldProps("company")}
          />
        </S.InputContainer>
        <S.InputContainer column>
          <TextFieldFormik
            name="jobTitle"
            label="Job Title"
            touched={formik.touched.jobTitle}
            errors={formik.errors.jobTitle}
            formikProps={formik.getFieldProps("jobTitle")}
          />
        </S.InputContainer>
      </S.Row>
      <S.Row>
        <S.InputContainer>
          <SelectInputFormik
            name="contactReason"
            label="How can we help you?"
            touched={formik.touched.contactReason}
            errors={formik.errors.contactReason}
            formikProps={formik.getFieldProps("contactReason")}
          />
        </S.InputContainer>
      </S.Row>
      <S.Row>
        <S.InputContainer>
          <TextFieldFormik
            name="message"
            label="Tell us a bit more about your inquiries ?"
            touched={formik.touched.message}
            errors={formik.errors.message}
            formikProps={formik.getFieldProps("message")}
            multiline={true}
          />
        </S.InputContainer>
      </S.Row>
      <S.SubmitButton text="Submit" type="submit" />
    </S.ContactUsForm>
  )
}

export default ContactUsForm
