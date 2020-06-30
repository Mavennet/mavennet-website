import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

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

  @media ${device.desktop} {
    padding: 125px 0 95px;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 2.84375em;
`

export const Text = styled.h3`
  font-size: 3rem;
  color: #ffffff;

  font-size: 34px;
  font-weight: 600;
  line-height: 41px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 48px;
    letter-spacing: 0;
    line-height: 64px;
  }
`
