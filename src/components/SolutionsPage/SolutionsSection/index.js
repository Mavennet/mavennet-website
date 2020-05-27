import React from "react"

import SolutionItem from "../SolutionItem"

import * as S from "./styles"

const colors = ["--c-p-selago", "--c-s-titan-white", "--c-s-iceberb"]

const SolutionsSection = ({ solutions }) => {
  const getSolutionsList = items => (
    <>
      {items.map((item, index) => (
        <S.SolutionSection key={item.title}>
          <SolutionItem
            item={item}
            backgroundColor={colors[index % colors.length]}
          />
        </S.SolutionSection>
      ))}
    </>
  )
  return <S.SolutionsSection>{getSolutionsList(solutions)}</S.SolutionsSection>
}

export default SolutionsSection
