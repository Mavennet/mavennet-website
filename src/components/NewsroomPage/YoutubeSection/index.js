import React from 'react'

import { Helmet } from 'react-helmet'

import Container from '../../base/Container'

import { useYoutubeData } from "../../../hooks/use-youtube-data"

import * as S from './styles'

const YoutubeSection = () => {
  const youtubeData = useYoutubeData()

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 7000,
    activeClassName: "slick-active",
    slidesToShow: 2,
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
  return (
    <S.TwitterSection>
      <Container>
        <S.Title>Subscribe to our channel</S.Title>
        <S.CustomSlider {...settings} style={{ marginTop: '60px'}}>
          {youtubeData.map(({ title, url }, index) => (
            <S.CardContainer key={title}>
              <iframe 
                src={url} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                ></iframe>
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

export default YoutubeSection