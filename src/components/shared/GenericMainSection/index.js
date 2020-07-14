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
  parallaxActive,
}) => {
  return (
    <S.GenericMainSection
      background={background}
      backgroundMobile={backgroundMobile || background}
      backgroundColor={backgroundColor}
      className={className}
      parallaxActive={parallaxActive}
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
