import styled from "styled-components"

export const Loader = styled.div`
  border: 5px solid var(--c-p-selago); /* Light grey */
  border-top: 5px solid var(--c-p-medium-purple); /* Blue */
  border-radius: 50%;
  width: 17px;
  height: 17px;
  animation: spin 2s linear infinite;

  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
