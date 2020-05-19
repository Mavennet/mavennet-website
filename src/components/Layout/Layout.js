import React from "react"
import styled from "styled-components"

import GlobalStyle from "../../styles/globalStyle"

const Div = styled.div`
  color: var(--c-a-plum);
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Div>{children}</Div>
    </>
  )
}
