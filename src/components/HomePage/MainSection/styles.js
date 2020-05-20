import styled from "styled-components"

export const MainSection = styled.section`
  position: relative;
  padding: 13.5625em 0;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: -1px;
    width: 0%;
    border-bottom: 95px solid white;
  }

  &:before {
    left: 0;
    border-right: 400px solid transparent;
  }

  &:after {
    right: 0;
    border-left: 400px solid transparent;
  }
`
export const Slogan = styled.h1`
  color: #ffffff;
`

export const ButtonContainer = styled.div`
  margin-top: 3.875em;
`
