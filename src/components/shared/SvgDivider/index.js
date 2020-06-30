import React from "react"

import * as S from "./styles"

const SvgDivider = ({ isPointingUp, top, bottom, flatMobile, fill }) => {
  const path = isPointingUp
    ? "M500.2,0L0,64.7V0H1000V64.7L500.2,0Z"
    : "M500.2,64.7L0,0v65h1000V0L500.2,64.7z"

  return (
    <S.SvgDivider top={top} bottom={bottom} flatMobile={flatMobile}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 65"
        preserveAspectRatio="none"
      >
        <path fill={fill ? fill : "#ffffff"} d={path}></path>
      </svg>
    </S.SvgDivider>
  )
}

export default SvgDivider
