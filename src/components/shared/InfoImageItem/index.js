import React from "react"

import * as S from "./styles"

const InfoImageItem = ({
  image,
  title,
  description,
  ctaText,
  reverse,
  companies,
  imgMaxWidth,
}) => {
  return (
    <S.InfoImageItem reverse={reverse}>
      <S.Column>
        <S.Image
          src={image}
          alt={title}
          reverse={reverse}
          imgMaxWidth={imgMaxWidth}
          data-aos="fade-up"
        />
      </S.Column>
      <S.Column>
        <S.TextContent>
          <S.Title data-aos="fade-up">{title}</S.Title>
          <S.Description data-aos="fade-up" data-aos-delay="150">
            {description}
          </S.Description>
          <S.CompaniesLogo data-aos="fade-up">
            {companies.map((company, index) => (
              <S.CompanyLogo key={index} src={company.logo} />
            ))}
          </S.CompaniesLogo>
          <S.CTAButton text={ctaText} to="/contact-us" reverse={true} />
        </S.TextContent>
      </S.Column>
    </S.InfoImageItem>
  )
}

export default InfoImageItem
