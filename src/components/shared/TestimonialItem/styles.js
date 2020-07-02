import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const TestimonialItem = styled.div`
  padding-left: 0.5em;

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
  }
`

export const Message = styled.blockquote`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;

  border-left: 6px solid var(--c-p-royal-purple);
  padding-left: 1.95em;
  padding-bottom: 2em;

  @media ${device.laptop} {
    width: 70%;
    padding: 1em 0 1em 2em;
  }

  @media ${device.desktop} {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 34px;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  margin-top: 1em;

  @media ${device.laptop} {
    margin-top: 0;
    flex-direction: column;
  }
`

export const PersonInfo = styled.div``

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;

  @media ${device.desktop} {
    font-weight: 600;
    letter-spacing: 0;
    line-height: 34px;
  }
`

export const Position = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;

  @media ${device.desktop} {
    font-size: 16px;
    letter-spacing: 0.25px;
    font-weight: 400;
    line-height: 24px;
  }
`

export const CompanyImage = styled.img`
  width: 150px;
`
