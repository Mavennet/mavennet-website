import styled from "styled-components"

export const ContactUsFooter = styled.section`
  overflow-x: hidden;
  position: relative;
  text-align: center;
  background-color: var(--c-p-haiti);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 10em 0 4.46875em;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    width: 0;
    border-top: 95px solid white;
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

export const ButtonContainer = styled.div`
  margin-top: 2.84375em;
`

export const Text = styled.h3`
  color: #ffffff;
`
