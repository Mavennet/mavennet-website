import React from "react"
import { Helmet } from "react-helmet"

import GenericButton from "../../shared/Button/Button"

import GlobalStyle from "../../../styles/globalStyle"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GenericButton />
      <GlobalStyle />
      {children}
    </>
  )
}
