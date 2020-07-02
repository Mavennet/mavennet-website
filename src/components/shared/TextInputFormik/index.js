import React from "react"

import TextField from "@material-ui/core/TextField"
import { withStyles } from "@material-ui/core/styles"

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#6E37AB",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#6E37AB",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#6E37AB",
      },
    },
  },
})(TextField)

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
      <CssTextField
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
