import React from "react"

import * as S from "./styles"

const MainSection = ({ image, logo, text }) => {
  return (
    <S.MainSection backgroundColor="--c-p-haiti">
      <S.MainSectionContainer>
        <S.Image src={image} alt={`${text} image`} />
        <S.Content>
          <S.Logo src={logo} alt={`${text} logo`} />
          <S.Title>{text}</S.Title>
        </S.Content>
      </S.MainSectionContainer>
    </S.MainSection>
  )
}

export default MainSection
