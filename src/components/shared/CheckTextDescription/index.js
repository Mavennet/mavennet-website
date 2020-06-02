import React from "react"

import checkIcon from "../../../assets/icons/check-solid.svg"

import * as S from "./styles"

const CheckTextDescription = ({ title, description }) => {
  return (
    <S.CheckTextDescription>
      <S.CheckIcon src={checkIcon} alt="Check icon" />
      <S.TextContent>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextContent>
    </S.CheckTextDescription>
  )
}

export default CheckTextDescription
