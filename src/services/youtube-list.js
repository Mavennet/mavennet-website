import axios from 'axios'

export const getYoutubeVideosInfo = async () => {
  return await axios.get('https://mckuvtadg4.execute-api.us-east-1.amazonaws.com/default/mavennet-youtube-feed')
}