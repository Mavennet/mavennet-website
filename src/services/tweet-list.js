import axios from 'axios'

export const getTweetEmbedList = async () => {
  return await axios.get('https://3bqzy02oze.execute-api.us-east-1.amazonaws.com/default/mavennet-twitter-oEmbed')
}