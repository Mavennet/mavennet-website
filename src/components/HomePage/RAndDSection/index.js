import React, { useState, useEffect } from "react"

import Slider from "react-slick"

import Container from "../../base/Container"

import line from "./test2.png"

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

  if (isDesktop) return <S.List>{children}</S.List>

  return <Slider {...settings}>{children}</Slider>
}

const RAndDSection = ({ title, subtitle, rAndDList }) => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    setWindowWidth(window.innerWidth)
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
          <ItemsList isDesktop={windowWidth >= 1280}>
            {rAndDList.map(({ item }, index) => {
              const { title, description, image } = item
              return (
                <S.ItemWrapper key={title}>
                  <S.Item isReverse={index % 2 === 0}>
                    <S.TextContext>
                      <S.ItemTitle>{title}</S.ItemTitle>
                      <S.ItemDescription>{description}</S.ItemDescription>
                    </S.TextContext>
                    <S.ImageContainer>
                      <S.Image src={image} alt={title} />
                    </S.ImageContainer>
                  </S.Item>
                  {index !== rAndDList.length - 1 && (
                    <S.Line src={line} isReverse={index % 2 !== 0} />
                  )}
                </S.ItemWrapper>
              )
            })}
          </ItemsList>
        </S.ListWrapper>
        <S.CTA text="Learn more about our R&D and IP" to="/r&d" />
      </Container>
    </S.RAndDSection>
  )
}

export default RAndDSection
