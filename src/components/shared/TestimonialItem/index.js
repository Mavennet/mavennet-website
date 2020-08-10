import React from "react"

import * as S from "./styles"

const TestimonialItem = ({ author, position, message, companyLogo }) => {
  return (
    <S.TestimonialItem>
      <S.Message>{message}</S.Message>
      <S.ContactInfo>
        <S.PersonInfo>
          <S.Name>{author}</S.Name>
          {position && <S.Position>{position}</S.Position>}
        </S.PersonInfo>
        {companyLogo && <S.CompanyImage src={companyLogo} alt={`${author} company`} />}
      </S.ContactInfo>
    </S.TestimonialItem>
  )
}

export default TestimonialItem
