import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const TestimonialItem = styled.div`
  padding-left: 0.5em;

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
  }
`

export const Message = styled.p`
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 500;
  line-height: 24px;

  border-left: 6px solid var(--c-p-royal-purple);
  padding-left: 1.95em;
  padding-bottom: 2em;

  @media ${device.laptop} {
    width: 70%;
    padding-top: 2em;
  }

  @media ${device.desktop} {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 29px;
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
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 29px;

  @media ${device.desktop} {
    font-size: 2.125rem;
    font-weight: 600;
    line-height: 41px;
  }
`

export const Position = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 24px;

  @media ${device.desktop} {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 29px;
  }
`

export const CompanyImage = styled.img`
  width: 150px;
`
