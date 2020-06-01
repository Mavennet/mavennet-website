import styled from "styled-components"

import TextArrowCTA from "../../shared/TextArrowCTA"

import { device } from "../../../consts/deviceSizes"

export const AnnoucementsSection = styled.section`
  padding: 4em 0;
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 48px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 2.5rem;
    line-height: 58px;
  }
`

export const CTA = styled(TextArrowCTA)`
  width: fit-content;
`

export const AnnouncementsList = styled.ul`
  margin-top: 3.75em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const AnnouncementItem = styled.li`
  max-width: 354px;
  &:not(:first-child) {
    margin-top: 3.75em;
  }

  @media ${device.laptop} {
    width: ${props => (props.first ? "100%" : "30%")};
    max-width: unset;
  }
`

export const AnnouncementCard = styled.a`
  color: var(--c-p-haiti) !important;
  display: block;
  margin: 0 auto;

  @media ${device.laptop} {
    ${({ first }) =>
      first &&
      `
      display: flex;


      ${Header},
      ${Content} {
        width: 50%;
      }

      ${Content} {
        padding: 3em 2em 3em 4.5em;
        box-sizing: border-box;
      }

      ${CardTitle} {
        font-size: 2.125rem;
        font-weight: 600;
        line-height: 41px;
        margin-top: 0;
      }

      ${CardDate} {
        display: block;
      }
    `};
  }
`

export const Header = styled.header``

export const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`

export const Content = styled.div``

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 29px;

  margin-top: 2.1875em;
`

export const CardDate = styled.p`
  display: none;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 29px;

  margin-top: 0.8em;
`
