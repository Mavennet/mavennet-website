import React, { useState, useRef } from "react"

import Slider from "react-slick"

import Button from "../../shared/Button"

import * as S from "./styles"

const SolutionsSection = ({ title, subtitle, solutionList }) => {
  const [currSlide, setCurrSlide] = useState(0)

  const sliderRef = useRef(null)

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
    appendDots: dots => <S.DotsWrapper>{dots}</S.DotsWrapper>,
    beforeChange: (current, next) => setCurrSlide(next),
  }

  const handleSolutionIconClick = index => {
    sliderRef.current.slickGoTo(index)
  }

  const getSolutionIcons = items => {
    const solutionItems = items.map(item => item.item)

    return solutionItems.map((solution, index) => (
      <S.SolutionIcon
        active={index === currSlide}
        onClick={() => handleSolutionIconClick(index)}
      >
        <S.IconImage src={solution.logo} alt={solution.title} />
      </S.SolutionIcon>
    ))
  }

  const getSolutionItems = items => {
    const newItems = items.map(item => item.item)

    return newItems.map(
      ({ title, image, description, slug, ctaText, logo }, index) => (
        <S.SolutionItem key={title}>
          <S.ItemContainer>
            <S.ContentWrapper>
              <S.ItemLogo src={logo} />
              <S.ItemTitle className="headline-medium">{title}</S.ItemTitle>
              <S.Description>{description}</S.Description>
              <S.ButtonWrapper>
                <Button text={ctaText} to={slug} />
              </S.ButtonWrapper>
            </S.ContentWrapper>
            <S.ImageContainer>
              <S.Image src={image} alt={`${title} image`} />
            </S.ImageContainer>
          </S.ItemContainer>
        </S.SolutionItem>
      )
    )
  }

  return (
    <S.SolutionsSection>
      <S.Header>
        <S.Title className="headline-large">{title}</S.Title>
        <S.Subtitle className="statement-medium">{subtitle}</S.Subtitle>
        <S.SolutionsList>{getSolutionIcons(solutionList)}</S.SolutionsList>
      </S.Header>
      <S.SlideSection>
        <Slider ref={sliderRef} {...settings}>
          {getSolutionItems(solutionList)}
        </Slider>
      </S.SlideSection>
    </S.SolutionsSection>
  )
}

export default SolutionsSection
