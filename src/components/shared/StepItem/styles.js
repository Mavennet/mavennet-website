import styled from "styled-components"

export const Item = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Image = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
`

export const Title = styled.h4`
  margin-top: 22px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 34px;
`

export const Description = styled.p`
  color: var(--c-p-grey);

  max-width: 220px;
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 24px;
  text-align: center;

  margin-top: 15px;
`
