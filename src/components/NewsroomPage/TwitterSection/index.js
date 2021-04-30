import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import Container from '../../base/Container'

import { useTweetsData } from "../../../hooks/use-tweets-data"
import { getTweetEmbedList } from "../../../services/tweet-list"

import * as S from './styles'

const TwitterSection = () => {
  const [tweets, setTweets] = useState([])
  const tweetsData = useTweetsData()

  useEffect(() => {
    async function getTweet () {
      const response = await getTweetEmbedList();
      console.log(response.data)
      setTweets(response.data)
    }

    getTweet()
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    activeClassName: "slick-active",
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: function (i) {
      return <S.CustomDot />
    },
    appendDots: dots => <S.DotsWrapper>{dots}</S.DotsWrapper>,
    responsive: [
      {
        breakpoint: 1280,
          settings: {
            slidestoshow: 3,
          }
      },

      {
        breakpoint: 850,
          settings: {
            slidestoshow: 2,
          }
      },
      {
        breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
      }
    ]
  }
  if (tweets.length === 0) return null

  return (
    <S.TwitterSection>
      <Container>
        <S.Title>Follow us on Twitter</S.Title>
        <S.CustomSlider {...settings} style={{ marginTop: '60px'}}>
          {tweets.map(({ title, html }, index) => (
            <S.CardContainer key={title}>
              <div dangerouslySetInnerHTML={{
                __html: html
              }}></div>
            </S.CardContainer>
          ))}
        </S.CustomSlider>
      </Container>
      <Helmet>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Helmet>
    </S.TwitterSection>
  )
}

export default TwitterSection