import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const SummarySection = styled.section`
  padding: 5em 0;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column-reverse;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Content = styled.div``

export const Wrapper = styled.div`
  @media ${device.laptop} {
    width: ${props => (props.width ? props.width : "100%")};
  }
`

export const TextContent = styled.div`
  margin-top: 2.4375em;

  @media ${device.laptop} {
    margin-top: 0;
  }
`

export const Title = styled.h2`
  font-size: 2.125rem;
  font-weight: 600;
  line-height: 41px;
`

export const Description = styled.p`
  font-size: 1rem;
  line-height: 27px;

  margin-top: 1.5625em;
`

export const ImageWrapper = styled.div`
  max-width: 229px;
  margin: 0 auto;

  @media ${device.laptop} {
    max-width: 268px;
  }
`

export const Image = styled.img`
  width: 100%;
  display: block;
`

export const ItemsList = styled.ul`
  margin-top: 3.12em;

  @media ${device.laptop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const ListItem = styled.li`
  margin-top: 2.125em;

  @media ${device.laptop} {
    width: ${props => (props.width ? props.width : "100%")};
  }
`
