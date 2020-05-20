import React, { useState, useEffect } from "react"

import * as S from "./styles"

import arrowRight from "../../../assets/icons/chevron-right-solid.svg"

const DropDownClick = ({ item, isDrawerClosed }) => {
  const [isOpen, setOpenState] = useState(false)

  useEffect(() => setOpenState(false), [isDrawerClosed])

  const handleToggle = () => {
    setOpenState(!isOpen)
  }

  const getContentList = list => {
    if (list.length > 0) {
      return (
        <S.ContentList isOpen={isOpen}>
          {list.map(item => (
            <S.ListItem>
              <S.ItemLink to={item.to}>{item.name}</S.ItemLink>
            </S.ListItem>
          ))}
        </S.ContentList>
      )
    }
  }

  return (
    <S.DropDown>
      <S.Parent onClick={handleToggle}>
        {item.name}
        <S.ArrowRight src={arrowRight} alt="Arrow Right" />
      </S.Parent>
      {getContentList(item.children)}
    </S.DropDown>
  )
}

export default DropDownClick
