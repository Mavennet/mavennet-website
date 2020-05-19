import { createGlobalStyle } from "styled-components"

import reset from "./reset"
import colors from "./colors"
import typography from "./typography"

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${colors}
  ${typography}
`

export default GlobalStyle
