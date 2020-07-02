import React from "react"

import * as S from "./styles"

const NumberItem = ({ numbers, description, isPercentage }) => {
  const number = isPercentage ? `${numbers}%` : numbers
  const percentComplete = isPercentage ? numbers : 100
  return (
    <S.NumberItem>
      <S.CircularChart viewBox="0 0 36 36">
        <S.CircleBg
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <S.Circle
          strokeDasharray={`${percentComplete}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <S.Number x="18" y="20.35">
          {number}
        </S.Number>
      </S.CircularChart>
      <S.Description>{description}</S.Description>
    </S.NumberItem>
  )
}

export default NumberItem
