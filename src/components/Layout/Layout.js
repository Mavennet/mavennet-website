import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import GlobalStyle from "../../styles/globalStyle"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      {children}
    </>
  )
}
