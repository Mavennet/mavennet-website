import React from "react"

import Container from "../../base/Container"
import SocialNetLink from "../../shared/SocialNetLink"

import * as S from "./styles"

import background from "../../../assets/images/contact-us-bg.png"

const MainSection = ({ backgroundColor, meta }) => {
  const { social } = meta

  const getSocialList = socialList => {
    return (
      <S.SocialList>
        {Object.entries(socialList).map(([key, value]) => (
          <S.SocialItem key={key}>
            <SocialNetLink socialNetwork={key} userTag={value} />
          </S.SocialItem>
        ))}
      </S.SocialList>
    )
  }
  return (
    <S.MainSection background={background}>
      <Container>
        <S.Title>We’d love to hear from you, let’s get in touch!</S.Title>
        <S.InfoList>
          <S.Column>
            <S.InfoItem>
              <S.ItemTitle>Project Inquires</S.ItemTitle>
              <S.ItemDescription
                as="a"
                href="mailto:info@mavennet.com?subject=Project Inquires"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@mavennet.com
              </S.ItemDescription>
            </S.InfoItem>
            <S.InfoItem>
              <S.ItemTitle>Career Inquires</S.ItemTitle>
              <S.ItemDescription
                as="a"
                href="mailto:talent@mavennet.com?subject=Career Inquires"
                target="_blank"
                rel="noopener noreferrer"
              >
                talent@mavennet.com
              </S.ItemDescription>
            </S.InfoItem>
          </S.Column>
          <S.Column>
            <S.InfoItem>
              <S.ItemTitle>Office</S.ItemTitle>
              <S.ItemDescription
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/maps/tMfH3S3CwZTb1pyPA"
              >
                477 Richmond Street West, 703 <br />
                Toronto, Ontario, Canada <br />
                M5V 3E7
              </S.ItemDescription>
            </S.InfoItem>
          </S.Column>
          <S.Column>
            <S.InfoItem>
              <S.ItemTitle>Connect with us</S.ItemTitle>
              <S.ItemDescription as="div">
                {getSocialList(social)}
              </S.ItemDescription>
            </S.InfoItem>
          </S.Column>
        </S.InfoList>
      </Container>
    </S.MainSection>
  )
}

export default MainSection
