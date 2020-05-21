import React from "react"

import Slider from "react-slick"

import Container from "../../base/Container"
import Button from "../../shared/Button"

import * as S from "./styles"

const SolutionsSection = ({ solutions }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    activeClassName: "slick-active",
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return <S.CustomDot />
    },
  }

  const getSolutionItems = items => {
    const newItems = items.map(item => item.item)

    return newItems.map(
      ({ title, image, description, slug, ctaText }, index) => (
        <S.SolutionItem key={title} reverse={index % 2 === 0}>
          <Container>
            <S.Image src={image} alt={`${title} image`} />
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.ButtonWrapper>
              <Button text={ctaText} to={slug} />
            </S.ButtonWrapper>
          </Container>
        </S.SolutionItem>
      )
    )
  }

  return (
    <S.SolutionsSection>
      <Slider {...settings}>{getSolutionItems(solutions)}</Slider>
    </S.SolutionsSection>
  )
}

export default SolutionsSection
