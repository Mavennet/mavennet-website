import React from "react"

import * as S from "./styles"

const SvgDivider = ({
  isPointingUp,
  isReverse,
  top,
  bottom,
  flatMobile,
  fill,
  dividerIndex,
}) => {
  const path = isPointingUp
    ? "M500.2,0L0,64.7V0H1000V64.7L500.2,0Z"
    : "M500.2,64.7L0,0v65h1000V0L500.2,64.7z"

  const pathReverse = isPointingUp
    ? "M500.2,0L0,65H1000L500.2,0Z"
    : "M500.2,65L0,0H1000L500.2,65Z"

  return (
    <S.SvgDivider
      top={top}
      bottom={bottom}
      flatMobile={flatMobile}
      dividerIndex={dividerIndex}
    >
      <svg
        style={{ display: "block", height: "100%" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 65"
        preserveAspectRatio="none"
      >
        <path
          fill={fill ? fill : "#ffffff"}
          d={isReverse ? pathReverse : path}
        ></path>
      </svg>
    </S.SvgDivider>
  )
}

export default SvgDivider
