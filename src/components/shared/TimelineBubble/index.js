import React from "react"

import * as S from "./styles.js"

export const TimelineBubble = ({
  relevance,
  bubbleStyle,
  position,
  imagePath,
  alt,
  isImageVisible,
}) => {
  return (
    <S.TimelineBubble
      position={position}
      bubbleStyle={bubbleStyle}
      relevance={relevance}
      isImageVisible={isImageVisible}
    >
      <S.Icon
        src={require(`../../../assets/images/timeline/${imagePath}`).default}
        alt={alt}
        visible={isImageVisible}
      />
    </S.TimelineBubble>
  )
}

export default TimelineBubble
