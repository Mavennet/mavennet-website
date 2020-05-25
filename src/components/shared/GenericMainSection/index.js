import React from "react"

import * as S from "./styles"

const GenericMainSection = ({ children, background }) => {
  return (
    <S.GenericMainSection background={background}>
      {children}
    </S.GenericMainSection>
  )
}

export default GenericMainSection
