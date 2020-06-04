import React from "react"

import Container from "../../base/Container"

import * as S from "./styles"

const DemoSection = ({ title, textOnly, ctaText, image }) => {
  const ParentWrapper = ({ children }, textOnly) => {
    if (textOnly) {
      return <Container center>{children}</Container>
    }

    return children
  }

  return (
    <S.DemoSection>
      {image && <S.Image src={image} alt={title} />}
      <S.TextContent textOnly={textOnly}>
        <ParentWrapper textOnly={textOnly}>
          <S.Title>{title}</S.Title>
          <S.DemoButton text={ctaText} to="/contact-us" />
        </ParentWrapper>
      </S.TextContent>
    </S.DemoSection>
  )
}

export default DemoSection
