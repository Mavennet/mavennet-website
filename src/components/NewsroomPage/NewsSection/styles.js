import styled from "styled-components"

import Container from "../../base/Container"
import TextArrowCTA from "../../shared/TextArrowCTA"

import { device } from "../../../consts/deviceSizes"

export const AnnoucementsSection = styled.section`
  padding: 167px 0 4em 0;
`

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;
  text-align: center;


  @media ${device.laptop} {
    text-align: left;
    font-size: 48px;
    letter-spacing: 0;
    line-height: 56px;
  }
`

export const AnnouncementsList = styled.ul`
  margin-top: 3.75em;
  position: relative;

  &::before {
    position: absolute;
    z-index: -2;
    content: "";
    top: 30px;
    right: 0;
    left: 0;
    bottom: -68px;

    transform: skewY(5deg) !important;
    background-color: var(--c-s-iceberb);
  }

  &::after {
    position: absolute;
    z-index: -1;
    content: "";
    height: 100%;
    top: 24px;
    right: 0;
    left: 0;
    bottom: 0;

    background-color: var(--c-p-selago-dark);
  }

`

export const AnnouncementListContainer = styled(Container)`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, 1fr);

  @media ${device.tabletL} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

`

export const AnnouncementCard = styled.div`
  max-width: 369px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: var(--c-p-white);

  display: flex;
  flex-direction: column;


  padding: 24px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 6px 24px rgba(0, 0, 0, 0.04), 0px 8px 24px rgba(0, 0, 0, 0.04);
  border-radius: 16px;

  @media ${device.tabletL} {
    margin: unset;
  }

`

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  line-height: 36px;
  color: var(--c-s-gray30);
`

export const CardText = styled.p`
  font-family: "Barlow" sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 29px;

  letter-spacing: 0.5px;
  color: #7F738C;

  margin-top: 10px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 200px;
`

export const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 16px;
`

export const Content = styled.div`
  margin-top: 10px;
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const LinkCTA = styled(TextArrowCTA)`
  font-weight: 600;
  font-size: 16px !important;
  line-height: 20px;

  text-align: center;
  letter-spacing: 0.25px;


  margin: auto 0 0;

  h4 {
    color: var(--c-p-purple-50);
  }
`