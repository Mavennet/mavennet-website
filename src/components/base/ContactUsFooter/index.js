import React from "react"

import Button from "../../shared/Button"
import Container from "../Container"

import * as S from "./styles"

const ContactUsFooter = () => {
  return (
    <S.ContactUsFooter>
      <Container center>
        <S.Text>Lorem ipsum dolor sit amet</S.Text>
        <S.ButtonContainer>
          <Button text="Get In Touch" to="/about" />
        </S.ButtonContainer>
      </Container>
    </S.ContactUsFooter>
  )
}

export default ContactUsFooter
