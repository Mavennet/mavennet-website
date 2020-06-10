import React, { useState, useEffect } from "react"

import * as S from "./styles"

const Card = ({ title, description, pointsList, ctaText, image, isEven }) => {
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const [lineAngle, setLineAngle] = useState(0)
  const [lineWidth, setLineWidth] = useState(0)

  const IMAGE_WRAPPER_DIMENSION = {
    laptop: 440,
    laptopL: 500,
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => {
      getLineAngle(window.innerWidth, 64)
    }
    window.addEventListener("resize", handleResize)

    setWrapperWidth(
      window.innerWidth < IMAGE_WRAPPER_DIMENSION.laptopL
        ? IMAGE_WRAPPER_DIMENSION.laptop
        : IMAGE_WRAPPER_DIMENSION.laptopL
    )

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const getLineAngle = (currWindowWidth, marginTop) => {
    const imageWrapperDimension =
      currWindowWidth < IMAGE_WRAPPER_DIMENSION.laptopL
        ? IMAGE_WRAPPER_DIMENSION.laptopL
        : IMAGE_WRAPPER_DIMENSION.laptop

    const angleRad = Math.atan(
      marginTop / (currWindowWidth - imageWrapperDimension)
    )

    const angleDeg = (180 * angleRad) / Math.PI
    const line = 64 / Math.asin(angleRad)
    setWrapperWidth(imageWrapperDimension)
    setLineAngle(angleDeg)
    setLineWidth(line)
  }

  const getPointsList = items => (
    <S.PointsList>
      {items.map((item, index) => (
        <S.PointsItem key={index}>{item}</S.PointsItem>
      ))}
    </S.PointsList>
  )

  return (
    <S.Card isEven={isEven}>
      <S.TextContent>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        {pointsList && getPointsList(pointsList)}
        <S.CTA text={ctaText} to="/" />
      </S.TextContent>
      <S.ImageWrapper
        isEven={isEven}
        lineAngle={lineAngle}
        lineWidth={lineWidth}
        dimensions={wrapperWidth}
      >
        <S.Image src={image} atl={title} />
      </S.ImageWrapper>
    </S.Card>
  )
}

export default Card
