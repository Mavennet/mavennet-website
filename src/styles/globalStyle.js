import { createGlobalStyle } from "styled-components"

import reset from "./reset"
import colors from "./colors"

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${colors}
`

export default GlobalStyle
