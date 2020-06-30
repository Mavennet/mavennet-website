import React from "react"
import SvgDivider from "../SvgDivider"

import * as S from "./styles"

const GenericMainSection = ({
  children,
  background,
  backgroundMobile,
  backgroundColor,
  className,
  flatMobile,
}) => {
  return (
    <S.GenericMainSection
      background={background}
      backgroundMobile={backgroundMobile}
      backgroundColor={backgroundColor}
      className={className}
    >
      <SvgDivider bottom="-2px" flatMobile={flatMobile} />
      {children}
    </S.GenericMainSection>
  )
}

export default GenericMainSection
