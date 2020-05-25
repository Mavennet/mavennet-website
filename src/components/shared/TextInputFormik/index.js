import React from "react"

import TextField from "@material-ui/core/TextField"

const TextInputFormik = ({
  name,
  label,
  touched,
  errors,
  multiline,
  formikProps,
  rows,
}) => {
  return (
    <>
      <TextField
        error={touched && !!errors}
        label={label}
        name={name}
        {...formikProps}
        variant="outlined"
        fullWidth
        helperText={touched && errors}
        multiline={multiline}
        rows={rows}
      />
    </>
  )
}

export default TextInputFormik
