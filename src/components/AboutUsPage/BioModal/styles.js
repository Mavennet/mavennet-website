import styled from "styled-components"

import { DialogContent } from "@material-ui/core"
import { Close } from "@material-ui/icons"

import { device } from "../../../consts/deviceSizes"

export const Content = styled(DialogContent)`
  overflow-x: hidden;

  @media ${device.laptopL} {
    max-width: 55vw;
    padding: 1.5em 36px 4em 24px !important;
  }
`

export const ModalHeader = styled.header`
  @media ${device.laptopL} {
    display: flex;
    justify-content: flex-end;
  }
`

export const CloseIcon = styled(Close)`
  cursor: pointer;
`

export const Main = styled.main`
  @media ${device.laptopL} {
    display: flex;
    align-items: stretch;
    padding: 2em 80px 0;
  }
`

export const Info = styled.div`
  text-align: center;

  @media ${device.laptopL} {
    width: 30%;
    padding-right: 2em;
  }
`

export const BioContainer = styled.div`
  margin-top: 15px;
  @media ${device.laptopL} {
    width: 70%;
    margin-top: 0;
    padding: 0 5em 0 4em;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 174px;
  height: auto;

  margin: 0 auto;
`

export const Name = styled.h3`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 34px;

  margin-top: 25px;
`

export const Position = styled.h4`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 34px;

  margin-top: 8px;
`

export const SocialSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Bio = styled.p`
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 24px;
`
