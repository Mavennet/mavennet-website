import React from "react"
import { createGlobalStyle } from "styled-components"

import reset from "../../styles/reset"

const GlobalStyle = createGlobalStyle`
  ${reset}
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <div>{children}</div>
    </>
  )
}
