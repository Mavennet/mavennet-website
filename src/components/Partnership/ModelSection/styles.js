import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const ModelSection = styled.section`
  padding: 6.125em 0;

  text-align: center;

  @media ${device.laptop} {
    background-color: var(--c-p-selago);
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 58px;
`

export const ModelList = styled.ul`
  margin-top: 4em;
`

export const ListItem = styled.li`
  margin-top: 4em;
`

export const Model = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: center;
  }
`

export const ImageWrapper = styled.div`
  @media ${device.laptop} {
    width: 17%;
    margin-right: 3.75em;
  }
`

export const ModelImage = styled.img`
  display: block;
  width: 100%;
`

export const TextContent = styled.div`
  margin-top: 1em;

  @media ${device.laptop} {
    text-align: left;

    width: 50%;
  }
`

export const ModelTitle = styled.h3`
  font-size: 2.121rem;
  font-weight: 600;
  line-height: 41px;
`

export const ModelDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 27px;

  margin-top: 1.875em;
`
