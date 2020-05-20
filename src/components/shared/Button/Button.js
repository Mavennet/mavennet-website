import React from "react"
import PropTypes from "prop-types"

import { Button } from "./styles"

const GenericButton = ({ text, reverse, outline, to }) => {
  return (
    <Button to={to} reverse={reverse} outline={outline}>
      {text}
    </Button>
  )
}

GenericButton.propTypes = {
  text: PropTypes.string,
  reverse: PropTypes.bool,
  outline: PropTypes.bool,
  to: PropTypes.string,
}

GenericButton.defaultProps = {
  text: "Click Me!",
  reverse: false,
  outline: false,
  to: "#",
}

export default GenericButton
