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
  fill,
  dividerIndex,
}) => {
  return (
    <S.GenericMainSection
      background={background}
      backgroundMobile={backgroundMobile || background}
      backgroundColor={backgroundColor}
      className={className}
    >
      <SvgDivider
        bottom="-2px"
        flatMobile={flatMobile}
        fill={fill}
        dividerIndex={dividerIndex}
      />
      {children}
    </S.GenericMainSection>
  )
}

export default GenericMainSection
