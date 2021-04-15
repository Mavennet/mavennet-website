import React from "react"


import Container from '../../base/Container'

import background from '../../../assets/images/award-main.png'
import award1 from '../../../assets/images/award-mock-1.png'
import award2 from '../../../assets/images/award-mock-2.png'

import * as S from './styles'

const MainSection = ({ 
  highlights,
  handleScrollToServiceSection 
}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    arrows: false,
    adaptativeHeight: true,
    autoplaySpeed: 7000,
    activeClassName: "slick-active",
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const getItems = items => {
    return items.map(({ item }) => {
      const { highlightBackgroundImage, title, highlightImages} = item

      return (
        <S.CarrouselItem key={title} backgroundImage={highlightBackgroundImage}>
          <Container>
            <S.Content>
              <S.Title>{title}</S.Title>
              {highlightImages && (
                <S.ImagesList>
                {highlightImages.map((image, index) => (
                  <S.ImageContainer key={index}>
                    <S.Image src={image} />
                  </S.ImageContainer>
                  ))}
              </S.ImagesList> 
              )}
            </S.Content>
          </Container>
        </S.CarrouselItem>
      )
    })

  }

  return (
    <S.MainSection>
        <S.CustomSlider {...settings}>
          {getItems(highlights)}
        </S.CustomSlider>
        <S.ScrollAction onClick={handleScrollToServiceSection}>
          <S.ScrollText>scroll down</S.ScrollText>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-down"
              className="svg-inline--fa fa-chevron-down fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#FFFFFF"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
        </S.ScrollAction>
    </S.MainSection>
  )
}

export default MainSection