import React from "react"

import TextOnlyMainSection from "../../shared/TextOnlyMainSection"

import background from "../../../assets/images/space_background.png"

import * as S from "./styles"

const MainSection = ({ title, description, ctaText }) => {
  return (
    <TextOnlyMainSection
      title={title}
      description={description}
      ctaText={ctaText}
      background={background}
    />
  )
}

export default MainSection
