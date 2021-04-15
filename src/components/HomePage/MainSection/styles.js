import styled from "styled-components"

import { device } from "../../../consts/deviceSizes"

export const MainSection = styled.section`
  box-sizing: border-box;
  background: url(${props => props.backgroundImage}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  padding: 100px 0;
  min-height: 100vh;

  position: relative;

  @media ${device.laptop} {
    padding: 179px 0 248px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${device.laptop} {
    width: 50%;
  }
`

export const Title = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;

  color: var(--c-p-white);
`

export const ImagesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-top: 60px;

  @media ${device.mobileL} {
    justify-content: flex-start;
  }
`

export const ImageContainer = styled.li`
  max-width: 124px;

  @media ${device.mobileL} {
    margin-right: 53px;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

export const ScrollAction = styled.div`
  text-align: center;

  width: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  position: absolute;
  left: calc(50% - 52.5px);
  bottom: 35px;
  
  svg {
    width: 12px;
  }

  @media ${device.laptop} {
    bottom: 88px;
  }
`

export const ScrollText = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 180%;
  letter-spacing: 0.25px;
  color: var(--c-p-white);
`