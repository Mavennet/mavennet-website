import React from "react"
import PropTypes from "prop-types"

import Loader from "../Loader"

import * as S from "./styles"

const Button = ({
  text,
  reverse,
  outline,
  to,
  type,
  className,
  width,
  isLoading,
}) => {
  return type ? (
    <S.Button
      as="button"
      width={width}
      type={type}
      reverse={reverse ? 1 : undefined}
      outline={outline ? 1 : undefined}
      className={className}
      isLoading={isLoading}
    >
      {isLoading ? <Loader /> : text}
    </S.Button>
  ) : (
    <S.Button
      to={to}
      width={width}
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
  width: PropTypes.any,
}

Button.defaultProps = {
  text: "Click Me!",
  reverse: false,
  outline: false,
  to: "#",
  width: "auto",
}

export default Button
