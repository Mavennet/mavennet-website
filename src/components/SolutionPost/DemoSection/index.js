import React from "react"

import * as S from "./styles"

const DemoSection = ({ title, textOnly, ctaText, image, demoLink }) => {
  const ParentWrapper = ({ children }, textOnly) => {
    if (textOnly) {
      return <S.SectionContainer>{children}</S.SectionContainer>
    }

    return children
  }

  return (
    <S.DemoSection data-aos="fade-up" data-aos-offset="200">
      {image && <S.Image src={image} alt={title} />}
      <S.TextContent textOnly={textOnly}>
        <ParentWrapper textOnly={textOnly}>
          <S.Title imageText={!textOnly}>{title}</S.Title>
          <S.DemoButton text={ctaText} to="/contact-us" url={demoLink} />
        </ParentWrapper>
      </S.TextContent>
    </S.DemoSection>
  )
}

export default DemoSection
