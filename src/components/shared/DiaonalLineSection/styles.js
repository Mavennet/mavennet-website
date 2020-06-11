import styled from "styled-components"

export const DiagonalLineSection = styled.img`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  ${({ flip }) =>
    flip &&
    `
      transform: scaleX(-1);
  `}

  display: block;
`
