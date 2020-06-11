import React, { useState, useEffect } from "react"

import Card from "../Card"
import DiagonalLineSection from "../../shared/DiaonalLineSection"

import * as S from "./styles"

const ListSection = ({ randdList }) => {
  const [lineSectionProps, setLineSectionProps] = useState([])

  useEffect(() => {
    if (window === "undefined") return

    const DIMENSIONS = {
      laptop: {
        windowSize: 1024,
        wrapperSize: 440,
      },
      laptopL: {
        windowSize: 1280,
        wrapperSize: 500,
      },
    }

    const getImageWrapperSize = currWindowWidth =>
      currWindowWidth < DIMENSIONS.laptopL.windowSize
        ? DIMENSIONS.laptop.wrapperSize
        : DIMENSIONS.laptopL.wrapperSize

    const getLineSectionProps = (windowWidth, imageWrapperWidth) => {
      const lineSectionProps = randdList.map((item, index) => {
        const isFirst = index === 0
        const isReverse = index % 2 === 0

        const width = isFirst
          ? (windowWidth - imageWrapperWidth) / 2
          : windowWidth - imageWrapperWidth

        let marginLeft, marginRight

        if (isFirst) {
          marginLeft = !isReverse ? "auto" : `${imageWrapperWidth / 2}px`
          marginRight = !isReverse ? `${imageWrapperWidth / 2}px` : "auto"
        } else {
          marginLeft = "auto"
          marginRight = "auto"
        }

        return {
          width,
          isReverse,
          marginLeft,
          marginRight,
        }
      })

      const lastIsReverse = randdList.length % 2 === 0

      const lineSection = [
        ...lineSectionProps,
        {
          width: (windowWidth - imageWrapperWidth) / 2,
          isReverse: lastIsReverse,
          marginLeft: lastIsReverse ? "auto" : `${imageWrapperWidth / 2}px`,
          marginRight: lastIsReverse ? `${imageWrapperWidth / 2}px` : "auto",
        },
      ]

      return lineSection
    }

    const handleResize = () => {
      const windowWidth = document.documentElement.clientWidth
      const imageWrapperSize = getImageWrapperSize(
        document.documentElement.clientWidth
      )
      const lineSectionProps = getLineSectionProps(
        windowWidth,
        imageWrapperSize
      )

      setLineSectionProps(lineSectionProps)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [randdList])

  const getListItems = items => {
    if (lineSectionProps.length === 0) return null

    const { width, isReverse, marginLeft, marginRight } = lineSectionProps[
      lineSectionProps.length - 1
    ]

    return (
      <S.List>
        <>
          {items.map(({ item }, index) => {
            const {
              width,
              isReverse,
              marginLeft,
              marginRight,
            } = lineSectionProps[index]
            return (
              <>
                <DiagonalLineSection
                  key={index}
                  width={`${width}px`}
                  marginLeft={marginLeft}
                  marginRight={marginRight}
                  height="60px"
                  flip={isReverse}
                />
                <S.ListItem key={item.title} isEven={isReverse}>
                  <Card {...item} reverse={isReverse} />
                </S.ListItem>
              </>
            )
          })}
          <DiagonalLineSection
            width={`${width}px`}
            marginLeft={marginLeft}
            marginRight={marginRight}
            height="60px"
            flip={isReverse}
          />
        </>
      </S.List>
    )
  }

  return <S.ListSection>{getListItems(randdList)}</S.ListSection>
}

export default ListSection
