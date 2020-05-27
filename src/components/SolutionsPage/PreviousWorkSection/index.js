import React from "react"

import * as S from "./styles"

const PreviousWorkSection = ({ previousWork }) => {
  const { title, previousWorkList } = previousWork

  const getWorkList = list => {
    return (
      <S.WorkList>
        {list.map(item => (
          <S.WorkItem key={item.title}>
            <S.WorkCard to={item.link}>
              <S.Image src={item.image} alt={`${title} work cover`} />
              <S.Description>{item.title}</S.Description>
            </S.WorkCard>
          </S.WorkItem>
        ))}
      </S.WorkList>
    )
  }

  return (
    <S.PreviousWorkSection>
      <S.PreviousWorkContainer center>
        <S.Title>{title}</S.Title>
        {getWorkList(previousWorkList)}
      </S.PreviousWorkContainer>
    </S.PreviousWorkSection>
  )
}

export default PreviousWorkSection
