import axios from "axios"

export const callContactUs = async clientInfo => {
  console.log('gatsby ', process.env.GATSBY_MAILER_URL)
  console.log('node ', process.env.MAILER_URL)
  return await axios.post(process.env.GATSBY_MAILER_URL || process.env.MAILER_URL + "contact-us", {
    clientInfo,
  })
}
