import React from "react"

import Table from "./Table"

import * as S from "./styles"

const OpportunitiesSection = ({ title, opportunitiesList }) => {
  return (
    <S.OpportunitiesSection>
      <S.SectionContainer>
        <S.Title>{title}</S.Title>
        <S.TableWrapper>
          <Table
            head={["Job Title", "Location", "Date"]}
            body={opportunitiesList}
          />
        </S.TableWrapper>
      </S.SectionContainer>
    </S.OpportunitiesSection>
  )
}

export default OpportunitiesSection
