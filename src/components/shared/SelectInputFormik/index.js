import React from "react"

import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"

import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"

const SelectInputFormik = ({
  name,
  label,
  touched,
  errors,
  options,
  formikProps,
  className,
}) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>{label}</InputLabel>

      <Select
        error={touched && errors}
        name={name}
        {...formikProps}
        helperText={errors}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectInputFormik
