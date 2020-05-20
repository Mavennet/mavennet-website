import React from "react"

import * as S from "./styles"

const Hamburguer = ({ handleClick }) => {
  return (
    <S.Hamburguer onClick={() => handleClick(true)}>
      <S.Bar />
      <S.Bar />
      <S.Bar />
    </S.Hamburguer>
  )
}

export default Hamburguer
