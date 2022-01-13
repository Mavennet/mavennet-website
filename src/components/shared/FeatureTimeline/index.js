import React, { useEffect, useState, createRef } from "react"

import * as S from "./styles"

const FeatureTimeline = ({ items }) => {
  const refsList = React.useRef([])
  refsList.current = Array(items.length)
    .fill()
    .map((_, i) => refsList.current[i] || createRef())

  const [visibleItemsList, setVisibleItemsList] = useState(
    items.map(() => false)
  )

  useEffect(() => {
    if (typeof window === "undefined") return

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [items, visibleItemsList]) // eslint-disable-line

  const handleScroll = () => {
    let newArray = [...visibleItemsList]
    let arrayHasChanged = false

    refsList.current.forEach(({ current }, index) => {
      const position = current.getBoundingClientRect()

      let isVisible = false
      if (position.top + 300 < window.innerHeight && position.bottom >= 0) {
        isVisible = true
      }

      if (newArray[index] !== isVisible) {
        newArray[index] = isVisible

        arrayHasChanged = true
      }
    })

    if (arrayHasChanged) {
      setVisibleItemsList(newArray)
    }
  }

  return (
    <S.FeatureTimeline>
      <S.FeatureList>
        {items.map(({ title, description, image }, index) => (
          <S.ListItem
            key={title}
            ref={refsList.current[index]}
            isVisible={visibleItemsList[index]}
          >
            <S.Feature isEven={index % 2 === 0}>
              <S.TextContent>
                <S.Title data-aos="fade-up">{title}</S.Title>
                <S.Description data-aos="fade-up" data-aos-offset="250">
                  {description}
                </S.Description>
              </S.TextContent>
              <S.ImageWrapper data-aos="fade-up" data-aos-offset="250">
                <S.Image src={image} alt={title} />
              </S.ImageWrapper>
            </S.Feature>
          </S.ListItem>
        ))}
      </S.FeatureList>
    </S.FeatureTimeline>
  )
}

export default FeatureTimeline
