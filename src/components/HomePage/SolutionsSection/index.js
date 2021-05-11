import React, { useState, useRef, useEffect, forwardRef } from "react"

import Slider from "react-slick"

import Button from "../../shared/Button"
import Container from "../../base/Container"
import arrowPurple from "../../../assets/icons/slider-arrow.svg"
import arrowWhite from "../../../assets/icons/slider-arrow-white.svg"

import * as S from "./styles"

const SampleNextArrow = props => {
  const { className, style, onClick, isWhite } = props
  return (
    <S.Arrow
      className={className}
      onClick={onClick}
      style={{ ...style, height: "auto" }}
      isBanner={isWhite}
    >
      <S.ArrowImage
        src={isWhite ? arrowWhite : arrowPurple}
        isBanner={isWhite}
      />
    </S.Arrow>
  )
}

const SamplePrevArrow = props => {
  const { className, style, onClick, isWhite } = props
  return (
    <S.Arrow
      className={className}
      onClick={onClick}
      style={{ ...style, height: "auto" }}
      isBanner={isWhite}
      isPrev
    >
      <S.ArrowImage
        src={isWhite ? arrowWhite : arrowPurple}
        isPrev
        isBanner={isWhite}
      />
    </S.Arrow>
  )
}

const SolutionsSection = ({ title, subtitle, solutionList }, ref) => {
  const [currSlide, setCurrSlide] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  const solutionLogoSliderRef = useRef(null)
  const solutionBannerSliderRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    handleResize()
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

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
    appendDots: dots => <S.DotsWrapper mobileHidden>{dots}</S.DotsWrapper>,
    beforeChange: (current, next) => {
      if (solutionLogoSliderRef.current)
        solutionLogoSliderRef.current.slickGoTo(next)
      setCurrSlide(next)
    },
    nextArrow: <SampleNextArrow isWhite />,
    prevArrow: <SamplePrevArrow isWhite />,
  }

  const logosSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return <S.CustomDot />
    },
    appendDots: dots => <S.DotsWrapper>{dots}</S.DotsWrapper>,
    beforeChange: (current, next) => {
      solutionBannerSliderRef.current.slickGoTo(next)
      setCurrSlide(next)
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const handleSolutionIconClick = index => {
    solutionBannerSliderRef.current.slickGoTo(index)
  }

  const getSolutionIcons = items => {
    const solutionItems = items.map(item => item.item)

    if (windowWidth > 1024) {
      return (
        <S.SolutionsList>
          {solutionItems.map((solution, index) => (
            <S.SolutionIcon
              key={index}
              active={index === currSlide}
              onClick={() => handleSolutionIconClick(index)}
            >
              <S.IconImage src={solution.logo} alt={solution.title} />
            </S.SolutionIcon>
          ))}
        </S.SolutionsList>
      )
    }

    return (
      <Container>
        <Slider {...logosSettings} ref={solutionLogoSliderRef}>
          {solutionItems.map((solution, index) => (
            <S.IconWrapper key={solution.title}>
              <S.IconImage src={solution.logo} alt={solution.title} isMobile />
            </S.IconWrapper>
          ))}
        </Slider>
      </Container>
    )
  }

  const getSolutionItems = items => {
    const newItems = items.map(item => item.item)

    const checkExtension = fileName => {
      let extension

      if (/.(jpe?g|png|gif)$/.test(fileName)) extension = "image"

      if (/.(mp4|mov)$/.test(fileName)) extension = "video"

      return extension
    }

    return newItems.map(
      ({ title, media, description, slug, ctaText, logo }, index) => (
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
              {checkExtension(media) === "image" ? (
                <S.Image src={media} alt={`${title} media`} />
              ) : (
                  <S.Video autoPlay={false} loop muted playsInline>
                    <source src={media} type="video/mp4"></source>
                  </S.Video>
                )}
            </S.ImageContainer>
          </S.ItemContainer>
        </S.SolutionItem>
      )
    )
  }

  return (
    <S.SolutionsSection data-aos="fade-up" ref={ref}>
      <S.Header>
        <S.Title className="headline-large">{title}</S.Title>
        <S.Subtitle className="statement-medium">{subtitle}</S.Subtitle>
        <S.SolutionsIconsSection>
          {getSolutionIcons(solutionList)}
        </S.SolutionsIconsSection>
      </S.Header>
      <S.SlideSection>
        <Slider
          {...settings}
          ref={solutionBannerSliderRef}
          className="solution-slider"
        >
          {getSolutionItems(solutionList)}
        </Slider>
      </S.SlideSection>
    </S.SolutionsSection>
  )
}

export default forwardRef(SolutionsSection)
