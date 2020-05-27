import styled from "styled-components"

import { Link } from "gatsby"
import Container from "../../base/Container"

export const SolutionItem = styled.div`
  color: var(--c-p-haiti);

  position: relative;
  margin-top: 14.6vw;

  &::before {
    content: "";
    position: absolute;
    height: 110%;
    top: -28px;
    right: 0;
    left: 0;
    background-color: var(${props => props.backgroundColor});
    transform: skewY(8.3deg);
  }
`

export const ItemContainer = styled(Container)`
  z-index: 1;
  position: relative;

  padding: 4em 0;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
`

export const Image = styled.img`
  width: ${props => props.banner};
  max-width: 800px;
`

export const Content = styled.div`
  margin-top: 2em;
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: -0.13px;
  line-height: 48px;
`

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.07px;
  line-height: 24px;

  margin-top: 1em;
`
