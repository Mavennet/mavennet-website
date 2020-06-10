import React from "react"

import Card from "../Card"

import * as S from "./styles"

const ListSection = ({ randdList }) => {
  const getListItems = items => (
    <S.List>
      {items.map(({ item }, index) => (
        <S.ListItem key={item.title} isEven={index % 2 === 0}>
          <Card {...item} isEven={index % 2 === 0} />
        </S.ListItem>
      ))}
    </S.List>
  )

  return (
    <S.ListSection>
      {/* <S.SectionContainer>
        </S.SectionContainer> */}
      {getListItems(randdList)}
    </S.ListSection>
  )
}

export default ListSection
