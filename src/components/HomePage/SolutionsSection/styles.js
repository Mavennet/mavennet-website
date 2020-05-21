import styled from "styled-components"

export const SolutionsSection = styled.section`
  padding: 2em 0 3em;
  overflow-x: hidden;
`

export const SolutionItem = styled.div`
  position: relative;
  overflow: hidden;

  padding: 4em 0;

  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    width: 300%;
    height: 88%;
    top: ${props => (props.reverse ? "2%" : "11%")};
    left: -50%;
    transform: ${props => (props.reverse ? "rotate(-7deg)" : "rotate(7deg)")};
    background-color: var(--c-p-selago-dark);
  }
`

export const Image = styled.img`
  width: 80%;
  margin: 0 auto;
`

export const Title = styled.h3`
  margin-top: 1.2em;
`

export const Description = styled.p`
  margin-top: 1.875em;
`

export const ButtonWrapper = styled.div`
  margin-top: 2.5em;
`
export const CustomDot = styled.div`
  width: 11px;
  height: 11px;

  border-radius: 50%;
  background-color: var(--c-p-selago);
`
