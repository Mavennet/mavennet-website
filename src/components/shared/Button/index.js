import React from "react"
import PropTypes from "prop-types"

import Loader from "../Loader"

import * as S from "./styles"


const ButtonClick = ({
  text,
  reverse,
  outline,
  type,
  className,
  width,
  isLoading,
  onClick }) => (
    <S.Button
      as="button"
      props
      width={width}
      type={type}
      onClick={onClick}
      reverse={reverse ? 1 : undefined}
      outline={outline ? 1 : undefined}
      className={className}
      isLoading={isLoading}>
      {isLoading ? <Loader /> : text}
    </S.Button>
  )

const LinkButton = ({ to, url, width, reverse, outline, className, text }) => {
  if (url) {
    return <S.Button
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      width={width}
      reverse={reverse ? 1 : undefined}
      outline={outline ? 1 : undefined}
      className={className}
    >
      {text}
    </S.Button>
  }
  return <S.Button
    to={to}
    width={width}
    reverse={reverse ? 1 : undefined}
    outline={outline ? 1 : undefined}
    className={className}
  >
    {text}
  </S.Button>

}

const Button = (props) => {
  const { type } = props

  if (type) {
    return <ButtonClick {...props} />
  }

  return <LinkButton {...props} />
}

Button.propTypes = {
  text: PropTypes.string,
  reverse: PropTypes.bool,
  outline: PropTypes.bool,
  to: PropTypes.string,
  url: PropTypes.string,
  handleClick: PropTypes.func,
  width: PropTypes.any,
}

Button.defaultProps = {
  text: "Click Me!",
  reverse: false,
  outline: false,
  to: "#",
  url: "",
  width: "auto",
}

export default Button
