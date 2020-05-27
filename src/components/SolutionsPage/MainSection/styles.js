import styled from "styled-components"

export const MainSection = styled.section`
  text-align: left;
  color: #ffffff;

  padding-top: 10.75em;
  padding-bottom: 24em;

  position: relative;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: -0.13px;
  line-height: 48px;
`

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.08px;
  line-height: 29px;

  margin-top: 2.3em;
`
