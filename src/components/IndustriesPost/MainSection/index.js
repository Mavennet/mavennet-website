import React from "react"

import background from "../../../assets/images/space_background.png"

import * as S from "./styles"

const MainSection = ({ industry, description, image }) => {
  return (
    <S.MainSection background={background}>
      <S.MainSectionContainer>
        <S.TextContent>
          <S.Industy>{industry}</S.Industy>
          <S.Description>{description}</S.Description>
        </S.TextContent>
        <S.ImageContainer>
          <S.Image src={image} />
        </S.ImageContainer>
      </S.MainSectionContainer>
    </S.MainSection>
  )
}

export default MainSection
