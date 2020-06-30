import styled from "styled-components"

export const RAndDSection = styled.section`
  padding: 53px 0;
`

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 0.25px;
  line-height: 56px;
  text-align: center;
`

export const Description = styled.p`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 34px;
  text-align: center;

  margin-top: 20px;
`

export const ListWrapper = styled.div`
  margin-top: 74px;
  display: block;
  width: 100%;
`

export const List = styled.ul``

export const Item = styled.div`
  display: flex !important;
  flex-direction: column-reverse;
  align-items: center;
`

export const Image = styled.img`
  width: 203px;

  max-width: 100%;
  max-height: 100%;
  height: auto;
`

export const TextContext = styled.div`
  margin-top: 40px;
  max-width: 300px;
`

export const ItemTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 34px;
  text-align: center;
`

export const ItemDescription = styled.p`
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 24px;
  text-align: center;

  margin-top: 22px;
`

export const Arrow = styled.div`
  &::before {
    display: none;
  }

  &.slick-prev,
  &.slick-next {
    top: 106px;
    z-index: 2;
  }

  &.slick-prev {
    left: 0;
  }
  &.slick-next {
    right: 0;
  }
`

export const ArrowImage = styled.img`
  ${({ isPrev }) =>
    isPrev &&
    `
    transform: rotate(180deg);
  `}
`
