import React from "react"

import Layout from "../../base/Layout"
import Container from "../../base/Container"

import Background from "../../../assets/images/contact-us-bg.png"

import * as S from "./styles"

const MainSection = ({ title, description }) => {
  return (
    <Layout>
      <S.MainSection background={Background}>
        <Container>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </Container>
      </S.MainSection>
    </Layout>
  )
}

export default MainSection
