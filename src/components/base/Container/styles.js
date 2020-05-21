import styled from "styled-components"

export const Container = styled.div`
  width: 85%;
  margin: 0 auto;

  ${({ center }) =>
    center &&
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`
