import React, { useState, useEffect } from "react"

import Slider from "react-slick"

import Container from "../../base/Container"

import arrow from "../../../assets/icons/slider-arrow.svg"

import * as S from "./styles"

const SampleNextArrow = props => {
  const { className, style, onClick } = props
  return (
    <S.Arrow
      className={className}
      onClick={onClick}
      style={{ ...style, height: "auto" }}
    >
      <S.ArrowImage src={arrow} />
    </S.Arrow>
  )
}

const SamplePrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <S.Arrow
      className={className}
      onClick={onClick}
      style={{ ...style, height: "auto" }}
      src={arrow}
    >
      <S.ArrowImage src={arrow} isPrev />
    </S.Arrow>
  )
}

export const ItemsList = ({ children, isDesktop }) => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 7000,
    activeClassName: "slick-active",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  if (isDesktop) return children

  return <Slider {...settings}>{children}</Slider>
}

const RAndDSection = ({ title, subtitle, rAndDList }) => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    handleResize()
    console.log(windowWidth)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <S.RAndDSection>
      <Container center>
        <S.Title>{title}</S.Title>
        <S.Description>{subtitle}</S.Description>
        <S.ListWrapper>
          <ItemsList isDesktop={windowWidth >= 1024}>
            {rAndDList.map(({ item }, index) => {
              const { title, description, image } = item
              return (
                <S.Item isReverse={index % 2 !== 0}>
                  <S.TextContext>
                    <S.ItemTitle>{title}</S.ItemTitle>
                    <S.ItemDescription>{description}</S.ItemDescription>
                  </S.TextContext>
                  <S.Image src={image} alt={title} />
                </S.Item>
              )
            })}
          </ItemsList>
        </S.ListWrapper>
      </Container>
    </S.RAndDSection>
  )
}

export default RAndDSection
