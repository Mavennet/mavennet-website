import logoWhite from "../../../assets/images/logo_white.png"
import logoDark from "../../../assets/images/logo_dark.png"

const primary = {
  logo: logoWhite,
  color: "#FFFFFF",
  background: "transparent",
  button: "reverse",
  position: "absolute",
  boxShadow: "none",
}

const sticky = {
  logo: logoDark,
  color: "var(--c-p-haiti)",
  background: "#FFFFFF",
  button: "primary",
  position: "fixed",
  boxShadow: "0px -7px 19px 0px rgba(0,0,0,0.75)",
}

const themes = { primary, sticky }

export default themes
