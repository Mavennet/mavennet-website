import React from "react"

import Slider from "react-slick"

import * as S from "./styles"

const PartnersSlider = ({ partners, customSlidesSection }) => {
  const settings = {
    // dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    // activeClassName: "slick-active",
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  const sliderSettings = customSlidesSection || settings

  const PartnerItem = ({ logo, title }) => (
    <S.ImageContainer>
      <S.PartnerImage src={logo} alt={title} />
    </S.ImageContainer>
  )

  return (
    <S.SliderWrapper>
      <Slider {...sliderSettings}>
        {partners.map(partner => (
          <PartnerItem {...partner} />
        ))}
      </Slider>
    </S.SliderWrapper>
  )
}

export default PartnersSlider
