import React from "react"

import TextOnlyMainSection from "../../shared/TextOnlyMainSection"

import Background from "../../../assets/images/contact-us-bg.png"

const MainSection = ({ title, description }) => {
  return (
    <TextOnlyMainSection
      title={title}
      description={description}
      background={Background}
    />
  )
}

export default MainSection
