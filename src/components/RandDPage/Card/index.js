import React, { useState, useEffect } from "react"

import * as S from "./styles"

const Card = ({ title, description, pointsList, ctaText, image, reverse }) => {
  const getPointsList = items => (
    <S.PointsList>
      {items.map((item, index) => (
        <S.PointsItem key={index}>{item}</S.PointsItem>
      ))}
    </S.PointsList>
  )

  return (
    <S.Card reverse={reverse}>
      <S.TextContent>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        {pointsList && getPointsList(pointsList)}
        <S.CTA text={ctaText} to="/" />
      </S.TextContent>
      <S.ImageWrapper>
        <S.Image src={image} atl={title} />
      </S.ImageWrapper>
    </S.Card>
  )
}

export default Card
