import axios from "axios"

export const addEmailToNewsletter = async clientInfo => {
  return await axios.post(process.env.GATSBY_MAILER_URL + "contact-us", {
    clientInfo,
  })
}
