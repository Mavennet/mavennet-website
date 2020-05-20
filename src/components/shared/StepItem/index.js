import React from "react"

import * as S from "./styles"

const StepItem = ({ image, title, description }) => {
  return (
    <S.Item>
      <S.Image src={image} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Item>
  )
}

export default StepItem
