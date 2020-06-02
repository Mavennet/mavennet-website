import React, { useState, useEffect } from "react"

import PartnersSlider from "../../shared/PartnersSlider"

import * as S from "./styles"

const PartnersSection = ({ partners }) => {
  const [windowWidth, setWidth] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    setWidth(window.innerWidth)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })
  return (
    <S.PartnersSection>
      {windowWidth > 1024 ? (
        <S.PartnersContainer>
          <PartnersSlider partners={partners} />
        </S.PartnersContainer>
      ) : (
        <S.MobilePartnersSection partners={partners} />
      )}
    </S.PartnersSection>
  )
}

export default PartnersSection
