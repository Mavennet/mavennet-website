import React from "react"

import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"

import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"

const SelectInputFormik = ({
  name,
  label,
  touched,
  errors,
  options,
  formikProps,
}) => {
  return (
    <FormControl fullWidth error={touched && !!errors} variant="outlined">
      <InputLabel id="select-label">{label}</InputLabel>

      <Select
        name={name}
        labelId="select-label"
        labelWidth={170}
        {...formikProps}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormHelperText>{touched && errors}</FormHelperText>
    </FormControl>
  )
}

export default SelectInputFormik
