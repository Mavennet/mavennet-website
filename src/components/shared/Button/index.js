import React from "react"
import PropTypes from "prop-types"

import * as S from "./styles"

const Button = ({ text, reverse, outline, to, type, className }) => {
  return type ? (
    <S.Button
      as="button"
      type={type}
      reverse={reverse ? 1 : undefined}
      outline={outline ? 1 : undefined}
      className={className}
    >
      {text}
    </S.Button>
  ) : (
    <S.Button
      to={to}
      reverse={reverse ? 1 : undefined}
      outline={outline ? 1 : undefined}
      className={className}
    >
      {text}
    </S.Button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  reverse: PropTypes.bool,
  outline: PropTypes.bool,
  to: PropTypes.string,
  handleClick: PropTypes.func,
}

Button.defaultProps = {
  text: "Click Me!",
  reverse: false,
  outline: false,
  to: "#",
}

export default Button
