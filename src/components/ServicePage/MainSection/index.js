import React, { useState, useEffect } from "react"

import ServiceItem from "../ServiceItem"

import { getTopValues } from "../../../helpers/servicePageAbsoluteCalc"

import background from "../../../assets/images/service-bg.png"
import mobileBackground from "../../../assets/images/mobile-service-bg.png"

import * as S from "./styles"

const MainSection = ({
  serviceMainSection,
  serviceStepsSection,
  serviceContactUsSection,
}) => {
  const [windowWidth, setWidth] = useState(0)
  const [topValues, setTopValues] = useState(getTopValues())

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    setWidth(window.innerWidth)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  const getListServices = services =>
    services.map(({ item }, index) => (
      <S.Wrapper
        desktopTop={topValues.serviceList[index].desktop}
        mobileTop={topValues.serviceList[index].mobile}
      >
        <S.CustomContainer align={index % 2 === 0 ? "flex-start" : "flex-end"}>
          <ServiceItem {...item} position={index} />
        </S.CustomContainer>
      </S.Wrapper>
    ))

  return (
    <S.MainSection>
      <S.BackgroundImage
        src={windowWidth < 768 ? mobileBackground : background}
      />

      <S.Wrapper
        desktopTop={topValues.main.desktop}
        mobileTop={topValues.main.mobile}
      >
        <S.CustomContainer align="center">
          <S.Slogan>{serviceMainSection.slogan}</S.Slogan>
        </S.CustomContainer>
      </S.Wrapper>
      {getListServices(serviceStepsSection)}
      <S.Wrapper
        desktopTop={topValues.contactUs.desktop}
        mobileTop={topValues.contactUs.mobile}
      >
        <S.CustomContainer align="center">
          <S.ContactUsTitle>{serviceContactUsSection.title}</S.ContactUsTitle>
          <S.ContactUsButton
            text={serviceContactUsSection.ctaText}
            to="contact-us"
          />
        </S.CustomContainer>
      </S.Wrapper>
    </S.MainSection>
  )
}

export default MainSection
