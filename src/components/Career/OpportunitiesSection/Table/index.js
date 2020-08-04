import React from "react"

import { utcStringToFullMonthDate } from "../../../../helpers/dateManipulation"

import * as S from "./styles"

const Table = ({ head, body, noOpportunitiesText }) => {
  const getTableHead = headItems => (
    <S.Head>
      <S.Row>
        {headItems.map(item => (
          <S.Header>{item}</S.Header>
        ))}
      </S.Row>
    </S.Head>
  )

  const getTableBody = bodyItems => (
    <S.Body>
      {bodyItems.map(({ item }) => (
        <S.Row key={item.title}>
          <S.Cell>{item.title}</S.Cell>
          <S.Cell>{item.location}</S.Cell>
          <S.Cell>{utcStringToFullMonthDate(item.date)}</S.Cell>
          {item.link && (
            <S.Cell>
              <S.CTA text="Apply Now" link={item.link} />
            </S.Cell>
          )}
        </S.Row>
      ))}
    </S.Body>
  )

  return (
    <S.Table>
      {getTableHead(head)}
      {body.length > 0 ? 
        getTableBody(body)
        : <S.NoOpportunitiesText>{noOpportunitiesText}</S.NoOpportunitiesText>
      }
    </S.Table>
  )
}

export default Table
