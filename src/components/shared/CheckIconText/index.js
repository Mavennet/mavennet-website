import React from "react"

import checkIcon from "../../../assets/icons/check-solid.svg"

import * as S from "./styles"

const CheckIconText = ({ text }) => {
  return (
    <S.CheckIconText>
      <S.CheckIcon src={checkIcon} alt="Check icon" />
      {text}
    </S.CheckIconText>
  )
}

export default CheckIconText
