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
      {children}
    </S.GenericMainSection>
  )
}

export default GenericMainSection
