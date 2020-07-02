import React from "react"

import SvgDivider from "../../shared/SvgDivider"

import vivoPago from "../../../assets/images/vivopago-icon.png"
import tmx from "../../../assets/images/tmx_logo.png"

import * as S from "./styles"

const showcase = [
  {
    title: "VIVOPago",
    description: "App for Media and Telecoms Payments in Latin America.",
    image: vivoPago,
    to: "/solutions/vivopago",
    isExternal: false,
  },
  {
    title: "TMX",
    description: "Green bonds origination through maturity",
    image: tmx,
    to: "https://www.tmx.com/",
    isExternal: true,
  },
]

const ShowCaseSection = () => {
  return (
    <S.ShowCaseSection>
      <SvgDivider
        isPointingUp
        isReverse
        bottom="100%"
        fill="#F1E7FC
"
      />
      <S.SectionContainer>
        <S.Title>Showcase: Clients & Work </S.Title>
        <S.List>
          {showcase.map(item => (
            <S.Item>
              <S.Col>
                <S.Image src={item.image} />
              </S.Col>
              <S.Col text>
                <S.ItemTitle>{item.title}</S.ItemTitle>
                <S.ItemDescription>{item.description}</S.ItemDescription>
                {item.isExternal ? (
                  <S.CTA text="Learn More" link={item.to} />
                ) : (
                  <S.CTA text="Learn More" to={item.to} />
                )}
              </S.Col>
            </S.Item>
          ))}
        </S.List>
      </S.SectionContainer>
    </S.ShowCaseSection>
  )
}

export default ShowCaseSection
