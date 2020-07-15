import React from "react"

import Container from "../../base/Container"
import InfoImageItem from "../../shared/InfoImageItem"

import * as S from "./styles"

const IndustriesSection = ({ industries }) => {
  const getIndustriesList = list => {
    return (
      <S.IndustriesList>
        {list.map((industry, index) => (
          <S.IndustryListItem key={industry.title}>
            <InfoImageItem
              {...industry}
              reverse={index % 2 !== 0}
              isFirst={index === 0}
            />
          </S.IndustryListItem>
        ))}
      </S.IndustriesList>
    )
  }

  return (
    <S.IndustriesSection>
      <Container>{getIndustriesList(industries)}</Container>
    </S.IndustriesSection>
  )
}

export default IndustriesSection
