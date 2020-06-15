import React from "react"

import SvgDivider from "../../shared/SvgDivider"
import Button from "../../shared/Button"
import Container from "../Container"

import * as S from "./styles"

const ContactUsFooter = () => {
  return (
    <S.ContactUsFooter>
      <SvgDivider isPointingUp top="0" />
      <Container center>
        <S.Text>Lorem ipsum dolor sit amet</S.Text>
        <S.ButtonContainer>
          <Button text="Get In Touch" to="/contact-us" />
        </S.ButtonContainer>
      </Container>
    </S.ContactUsFooter>
  )
}

export default ContactUsFooter
