import logoWhite from "../../../assets/images/logo_white.svg"
import logoDark from "../../../assets/images/logo_dark.svg"

const primary = {
  logo: logoWhite,
  color: "#FFFFFF",
  activeBorder: "#ffffff",
  background: "transparent",
  button: "outline",
  position: "absolute",
  boxShadow: "none",
}

const sticky = {
  logo: logoDark,
  color: "var(--c-p-haiti)",
  background: "#FFFFFF",
  activeBorder: "#964beb",
  button: "primary",
  position: "fixed",
  boxShadow: "0px -7px 19px 0px rgba(0,0,0,0.75)",
}

const themes = { primary, sticky }

export default themes
