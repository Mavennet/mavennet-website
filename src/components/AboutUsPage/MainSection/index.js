import React from "react"

import Layout from "../../base/Layout"
import Container from "../../base/Container"

import Background from "../../../assets/images/contact-us-bg.png"

import * as S from "./styles"

const MainSection = () => {
  return (
    <Layout>
      <S.MainSection background={Background}>
        <Container>Main Section</Container>
      </S.MainSection>
    </Layout>
  )
}

export default MainSection
