import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

import Button from "../../shared/Button"

export const ContactUsForm = styled.form`
  width: 100%;
  max-width: 541px;
`
export const Row = styled.div`
  @media ${device.laptopL} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 1.5em;

  @media ${device.laptopL} {
    margin-top: 1.875em;

    ${({ column }) =>
      column &&
      `
        width: 45%;
      `}
  }
`
export const SubmitButton = styled(Button)`
  display: block;

  margin: 1.875em auto 0;
`
