import React from "react"

import * as S from "./styles"

const NumberItem = ({ numbers, image, description }) => (
  <S.NumberItem>
    <S.Image src={image} alt={`${description} image`} />
    <S.Number>{numbers}</S.Number>
    <S.Description>{description}</S.Description>
  </S.NumberItem>
)

export default NumberItem
