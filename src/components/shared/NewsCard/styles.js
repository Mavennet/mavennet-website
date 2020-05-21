import { Link } from "gatsby"

import styled from "styled-components"

export const NewsCard = styled.article`
  width: 100%;
  max-width: 385px;
  padding-bottom: 0.3125em;
`

export const CardLink = styled(Link)`
  widht: 100%;
`

export const Image = styled.img`
  display: block;
  width: 100%;
`

export const Title = styled.h4`
  color: var(--c-p-haiti);

  margin-top: 0.83em;
`
