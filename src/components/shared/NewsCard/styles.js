import styled from "styled-components"

export const NewsCard = styled.article`
  width: 100%;
  height: 100%;
  max-width: 385px;
  box-sizing: border-box;

  background-color: #fff;

  ${({ noBorder }) =>
    !noBorder &&
    `
      border: 1px solid var(--c-p-medium-purple);
  `}
`

export const CardLink = styled.a`
  width: 100%;
  height: 100%;
  padding-bottom: 2em;
`
export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
`

export const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const Title = styled.h4`
  color: var(--c-p-haiti);

  margin: 0.83em 0.875em 0;

  min-height: 87px;
`
