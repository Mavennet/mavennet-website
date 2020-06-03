import React from "react"

import { utcStringToFullMonthDate } from "../../../../helpers/dateManipulation"

import * as S from "./styles"

const Table = ({ head, body }) => {
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
        <S.Row>
          <S.Cell>{item.title}</S.Cell>
          <S.Cell>{item.location}</S.Cell>
          <S.Cell>{utcStringToFullMonthDate(item.date)}</S.Cell>
          <S.Cell>
            <S.CTA text="Apply Now" />
          </S.Cell>
        </S.Row>
      ))}
    </S.Body>
  )

  return (
    <S.Table>
      {getTableHead(head)}
      {getTableBody(body)}
    </S.Table>
  )
}

export default Table
