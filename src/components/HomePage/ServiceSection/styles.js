import styled from "styled-components"

export const Section = styled.section`
  text-align: center;

  padding: 2.1875em 0;
`

export const Title = styled.h2`
  color: var(--c-p-haiti);
`

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: 3.4375em;
`

export const ListItem = styled.li`
  & + & {
    margin-top: 4.375em;
  }
`
