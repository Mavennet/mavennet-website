import React from "react"

import Slider from "react-slick"

import * as S from "./styles"

const SampleNextArrow = props => {
  const { className, style, onClick } = props
  return (
    <S.Arrow
      isNext
      className={className}
      onClick={onClick}
      style={{ ...style, height: "auto" }}
    />
  )
}

const SamplePrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <S.Arrow
      className={className}
      onClick={onClick}
      style={{ ...style, height: "auto" }}
    />
  )
}

const TestimonialSection = ({ title, testimonialsList }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 7000,
    activeClassName: "slick-active",
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return <S.CustomDot />
    },
    appendDots: dots => <S.DotsWrapper>{dots}</S.DotsWrapper>,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const getTestimonials = testimonials => {
    return testimonials.map(({ item: testimonial }) => {
      const { name, position, image, testimony } = testimonial

      return (
        <S.Card>
          <S.ImageWrapper>
            <S.Image src={image} />
          </S.ImageWrapper>
          <S.Content>
            <S.Testimony>“{testimony}”</S.Testimony>
            <S.Position>{position}</S.Position>
            <S.Name>{name}</S.Name>
          </S.Content>
        </S.Card>
      )
    })
  }

  return (
    <S.TestimonialSection>
      <S.SectionContainer>
        <S.Title>{title}</S.Title>
        <S.SliderWrapper>
          <Slider {...settings}>{getTestimonials(testimonialsList)}</Slider>
        </S.SliderWrapper>
      </S.SectionContainer>
    </S.TestimonialSection>
  )
}

export default TestimonialSection
