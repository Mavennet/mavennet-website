import React from 'react'

import { Helmet } from 'react-helmet'

import Container from '../../base/Container'

import { useTweetsData } from "../../../hooks/use-tweets-data"

import * as S from './styles'

const htmlTags = [
  '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Congrats! Toronto-based tech company <a href="https://twitter.com/Mavennet_?ref_src=twsrc%5Etfw">@Mavennet_</a> will receive funding from <a href="https://twitter.com/hashtag/InnovativeSolutionsCanada?src=hash&amp;ref_src=twsrc%5Etfw">#InnovativeSolutionsCanada</a> to refine its <a href="https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw">#AI</a>-enabled prototype for digital tracing in the Canadian <a href="https://twitter.com/hashtag/steel?src=hash&amp;ref_src=twsrc%5Etfw">#steel</a> supply chain. <a href="https://t.co/wFnnYAMjp9">https://t.co/wFnnYAMjp9</a> <a href="https://t.co/rjzqsuN4Az">pic.twitter.com/rjzqsuN4Az</a></p>&mdash; ISED (@ISED_CA) <a href="https://twitter.com/ISED_CA/status/1365405127310467073?ref_src=twsrc%5Etfw">February 26, 2021</a></blockquote>',
  '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Congrats! Toronto-based tech company <a href="https://twitter.com/Mavennet_?ref_src=twsrc%5Etfw">@Mavennet_</a> will receive funding from <a href="https://twitter.com/hashtag/InnovativeSolutionsCanada?src=hash&amp;ref_src=twsrc%5Etfw">#InnovativeSolutionsCanada</a> to refine its <a href="https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw">#AI</a>-enabled prototype for digital tracing in the Canadian <a href="https://twitter.com/hashtag/steel?src=hash&amp;ref_src=twsrc%5Etfw">#steel</a> supply chain. <a href="https://t.co/wFnnYAMjp9">https://t.co/wFnnYAMjp9</a> <a href="https://t.co/rjzqsuN4Az">pic.twitter.com/rjzqsuN4Az</a></p>&mdash; ISED (@ISED_CA) <a href="https://twitter.com/ISED_CA/status/1365405127310467073?ref_src=twsrc%5Etfw">February 26, 2021</a></blockquote>',
  '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Congrats! Toronto-based tech company <a href="https://twitter.com/Mavennet_?ref_src=twsrc%5Etfw">@Mavennet_</a> will receive funding from <a href="https://twitter.com/hashtag/InnovativeSolutionsCanada?src=hash&amp;ref_src=twsrc%5Etfw">#InnovativeSolutionsCanada</a> to refine its <a href="https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw">#AI</a>-enabled prototype for digital tracing in the Canadian <a href="https://twitter.com/hashtag/steel?src=hash&amp;ref_src=twsrc%5Etfw">#steel</a> supply chain. <a href="https://t.co/wFnnYAMjp9">https://t.co/wFnnYAMjp9</a> <a href="https://t.co/rjzqsuN4Az">pic.twitter.com/rjzqsuN4Az</a></p>&mdash; ISED (@ISED_CA) <a href="https://twitter.com/ISED_CA/status/1365405127310467073?ref_src=twsrc%5Etfw">February 26, 2021</a></blockquote>',
  '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Congrats! Toronto-based tech company <a href="https://twitter.com/Mavennet_?ref_src=twsrc%5Etfw">@Mavennet_</a> will receive funding from <a href="https://twitter.com/hashtag/InnovativeSolutionsCanada?src=hash&amp;ref_src=twsrc%5Etfw">#InnovativeSolutionsCanada</a> to refine its <a href="https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw">#AI</a>-enabled prototype for digital tracing in the Canadian <a href="https://twitter.com/hashtag/steel?src=hash&amp;ref_src=twsrc%5Etfw">#steel</a> supply chain. <a href="https://t.co/wFnnYAMjp9">https://t.co/wFnnYAMjp9</a> <a href="https://t.co/rjzqsuN4Az">pic.twitter.com/rjzqsuN4Az</a></p>&mdash; ISED (@ISED_CA) <a href="https://twitter.com/ISED_CA/status/1365405127310467073?ref_src=twsrc%5Etfw">February 26, 2021</a></blockquote>',
]

const TwitterSection = () => {
  const tweetsData = useTweetsData()

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
  return (
    <S.TwitterSection>
      <Container>
        <S.Title>Follow us on Twitter</S.Title>
        <S.CustomSlider {...settings} style={{ marginTop: '60px'}}>
          {tweetsData.map(({ title, html }, index) => (
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