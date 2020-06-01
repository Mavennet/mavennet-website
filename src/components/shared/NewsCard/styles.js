import styled from "styled-components"

export const NewsCard = styled.article`
  width: 100%;
  height: 100%;
  max-width: 385px;
  padding-bottom: 2em;

  ${({ noBorder }) =>
    !noBorder &&
    `
      border: 1px solid var(--c-p-medium-purple);
  `}
`

export const CardLink = styled.a`
  width: 100%;
`

export const Image = styled.img`
  object-fit: contain;
  display: block;
  width: 100%;
  max-height: 185px;
`

export const Title = styled.h4`
  color: var(--c-p-haiti);

  margin: 0.83em 0.875em 0;

  min-height: 87px;
`
