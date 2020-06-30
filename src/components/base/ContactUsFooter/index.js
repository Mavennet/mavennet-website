import React from "react"

import SvgDivider from "../../shared/SvgDivider"
import Button from "../../shared/Button"
import Container from "../Container"

import * as S from "./styles"

const ContactUsFooter = ({ fillFooter }) => {
  return (
    <S.ContactUsFooter>
      <SvgDivider isPointingUp top="0" fill={fillFooter} />
      <Container center>
        <S.Text>Ready For Liftoff?</S.Text>
        <S.ButtonContainer>
          <Button text="Get In Touch" to="/contact-us" />
        </S.ButtonContainer>
      </Container>
    </S.ContactUsFooter>
  )
}

export default ContactUsFooter
