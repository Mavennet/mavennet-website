import React from "react"

import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import { withStyles } from "@material-ui/core/styles"

import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"

const CssInputLabel = withStyles({
  root: {
    "&.Mui-focused": {
      color: "#6E37AB",
    },
  },
})(InputLabel)

const CssFormControl = withStyles({
  root: {
    "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused.Mui-focused.MuiInputBase-formControl fieldset": {
      borderColor: "#6E37AB",
    },
    // "&": {
    //   borderColor: "#6E37AB",
    // },
    // "& .MuiInput-underline:after": {
    // },
    // "& .MuiOutlinedInput-root": {
    //   "&.Mui-focused fieldset": {
    //   },
    // },
  },
})(FormControl)

const SelectInputFormik = ({
  name,
  label,
  touched,
  errors,
  options,
  formikProps,
}) => {
  return (
    <CssFormControl fullWidth error={touched && !!errors} variant="outlined">
      <CssInputLabel id="select-label">{label}</CssInputLabel>

      <Select
        name={name}
        labelId="select-label"
        labelWidth={170}
        {...formikProps}
      >
        <MenuItem value="Solution and Project Inquiry">
          Solution and Project Inquiry
        </MenuItem>
        <MenuItem value="Career Inquiry">Career Inquiry</MenuItem>
        <MenuItem value="Partnership Inquiry">Partnership Inquiry</MenuItem>
        <MenuItem value="Media Inquiry">Media Inquiry</MenuItem>
        <MenuItem value="Other Inquires">Other Inquires</MenuItem>
      </Select>
      <FormHelperText>{touched && errors}</FormHelperText>
    </CssFormControl>
  )
}

export default SelectInputFormik
