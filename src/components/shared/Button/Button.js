import React from "react"
import PropTypes from "prop-types"

import { Button } from "./styles"

const GenericButton = ({ text, outline, to }) => {
  return (
    <Button to={to} outline={outline}>
      {text}
    </Button>
  )
}

GenericButton.propTypes = {
  text: PropTypes.string,
  outline: PropTypes.bool,
  to: PropTypes.string,
}

GenericButton.defaultProps = {
  text: "Click Me!",
  outline: false,
  to: "#",
}

export default GenericButton
