import React, { forwardRef } from "react"

import Table from "./Table"

import * as S from "./styles"

const OpportunitiesSection = ({ title, opportunitiesList, noOpportunitiesText }, ref) => {
  return (
    <S.OpportunitiesSection ref={ref}>
      <S.SectionContainer>
        <S.Title>{title}</S.Title>
        <S.TableWrapper>
          <Table
            head={["Job Title", "Location", "Date"]}
            body={opportunitiesList}
            noOpportunitiesText={noOpportunitiesText}
          />
        </S.TableWrapper>
      </S.SectionContainer>
    </S.OpportunitiesSection>
  )
}

export default forwardRef(OpportunitiesSection)
