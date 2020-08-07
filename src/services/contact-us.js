import axios from "axios"

export const callContactUs = async clientInfo => {
  return await axios.post(process.env.GATSBY_MAILER_URL || process.env.MAILER_URL + "contact-us", {
    clientInfo,
  })
}
