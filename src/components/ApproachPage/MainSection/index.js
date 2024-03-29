import React, { useState, useEffect } from "react"

import ApproachItem from "../ApproachItem"

import { getTopValues } from "../../../helpers/approachPageAbsoluteCalc"

import background from "../../../assets/images/approach-bg1.png"
import rocketbackground from "../../../assets/images/approach-rocket.png"
import mobileBackground from "../../../assets/images/mobile-approach-bg.png"

import * as S from "./styles"

const MainSection = ({
  approachMainSection,
  approachStepsSection,
  approachContactUsSection,
}) => {
  const [windowWidth, setWidth] = useState(0)
  const topValues = getTopValues()

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    setWidth(window.innerWidth)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const getListApproaches = approaches =>
    approaches.map(({ item }, index) => (
      <S.Wrapper
        key={index}
        desktopTop={topValues.approachList[index].desktop}
        tabletTop={topValues.approachList[index].tablet}
        mobileTop={topValues.approachList[index].mobile}
      >
        <S.CustomContainer align={index % 2 === 0 ? "flex-start" : "flex-end"}>
          <ApproachItem {...item} position={index} />
        </S.CustomContainer>
      </S.Wrapper>
    ))

  return (
    <S.MainSection>
      <S.BackgroundImage
        src={windowWidth < 768 ? mobileBackground : background}
      />

      <S.Wrapper
        main={true}
        desktopTop={topValues.main.desktop}
        tabletTop={topValues.main.tablet}
        mobileTop={topValues.main.mobile}
      >
        <S.CustomContainer align="center">
          <S.Slogan>{approachMainSection.slogan}</S.Slogan>
        </S.CustomContainer>
      </S.Wrapper>
      {getListApproaches(approachStepsSection)}
      <S.Wrapper
        desktopTop={topValues.contactUs.desktop}
        tabletTop={topValues.contactUs.tablet}
        mobileTop={topValues.contactUs.mobile}
      >
        <S.CustomContainer align="center">
          <S.ContactUsTitle>{approachContactUsSection.title}</S.ContactUsTitle>
          <S.ContactUsButton
            text={approachContactUsSection.ctaText}
            to="contact-us"
          />
        </S.CustomContainer>
      </S.Wrapper>
      {windowWidth >= 768 && <S.RocketImage src={rocketbackground} />}
    </S.MainSection>
  )
}

export default MainSection
