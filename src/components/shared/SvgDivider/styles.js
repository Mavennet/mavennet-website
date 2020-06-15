import styled from "styled-components"

export const SvgDivider = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: ${({ bottom }) => bottom || "unset"};
  top: ${({ top }) => top || "unset"};
`
