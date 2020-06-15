import React from "react"

import * as S from "./styles"

const GenericMainSection = ({
  children,
  background,
  backgroundColor,
  className,
}) => {
  return (
    <S.GenericMainSection
      background={background}
      backgroundColor={backgroundColor}
      className={className}
    >
      <S.DividerWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M500.2,64.7L0,0v100h1000V0L500.2,64.7z"
          ></path>
        </svg>
      </S.DividerWrapper>
      {children}
    </S.GenericMainSection>
  )
}

export default GenericMainSection
