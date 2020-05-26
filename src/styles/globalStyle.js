import { createGlobalStyle } from "styled-components"

import reset from "./reset"
import colors from "./colors"
import typography from "./typography"
import { carousel } from "./carousel"
import { alert } from "./alert"

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${colors}
  ${typography}
  ${carousel}
  ${alert}
`

export default GlobalStyle
