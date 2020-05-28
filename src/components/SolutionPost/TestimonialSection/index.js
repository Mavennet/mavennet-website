import React from "react"

import Slider from "react-slick"

import Container from "../../base/Container"
import TestimonialItem from "../../shared/TestimonialItem"

import * as S from "./styles"

const TestimonialSection = ({ testimonialList }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    activeClassName: "slick-active",
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <S.TestimonialSection>
      <Container>
        <S.Title>What our clients are saying…</S.Title>
        <Slider {...settings}>
          {testimonialList.map(testimonial => (
            <TestimonialItem
              key={testimonial.testimony.author}
              {...testimonial.testimony}
            />
          ))}
        </Slider>
      </Container>
    </S.TestimonialSection>
  )
}

export default TestimonialSection
