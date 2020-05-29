import React from "react"

import Slider from "react-slick"

import InfoImageItem from "../../shared/InfoImageItem"
import Container from "../../base/Container"

import * as S from "./styles"

const ExploreSection = ({ title, items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    activeClassName: "slick-active",
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return <S.CustomDot />
    },
  }

  const getSolutions = solutions => {
    return solutions.map(({ item }) => (
      <S.ItemContainer>
        <InfoImageItem {...item} imgMaxWidth="520px" />
      </S.ItemContainer>
    ))
  }

  return (
    <S.ExploreSection>
      <Container center>
        <S.Title>{title}</S.Title>
        <S.SliderWrapper>
          <Slider {...settings}>{getSolutions(items)}</Slider>
        </S.SliderWrapper>
      </Container>
    </S.ExploreSection>
  )
}

export default ExploreSection
