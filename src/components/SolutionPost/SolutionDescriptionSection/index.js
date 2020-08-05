import React from "react"

import Container from "../../base/Container"

import checkIcon from "../../../assets/icons/check-solid.svg"

import * as S from "./styles"

const SolutionDescriptionSection = ({
  featureType,
  title,
  description,
  image,
  items,
}) => {
  const isBanner = featureType === "banner"
  const isImageOnly = featureType === "imageOnly"

  const getPointsList = points => {
    return (
      <S.PointsList isBanner={isBanner}>
        {points.map(point => (
          <S.PointsItem key={point}>
            <S.CheckIcon src={checkIcon} alt="Check icon" />
            {point}
          </S.PointsItem>
        ))}
      </S.PointsList>
    )
  }

  const Regular = ({ title, image, items }) => (
    <S.SolutionDescriptionSection data-aos="fade-up">
      <Container>
        <S.Content style={{ marginTop: 0 }}>
          <S.Col imageContent>
            <S.ImageContainer isBanner={true}>
              <S.Image src={image} alt={`${title} image`} />
            </S.ImageContainer>
          </S.Col>
          <S.Col textContent>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            {getPointsList(items)}
          </S.Col>
        </S.Content>
      </Container>
    </S.SolutionDescriptionSection>
  )

  const Banner = ({ title, image, items }) => (
    <S.SolutionDescriptionSection data-aos="fade-up">
      <Container center>
        <S.Title isImageOnly={true}>{title}</S.Title>
        <S.Content isBanner={false} isImageOnly={true}>
          <S.ImageContainer isBanner={false} isImageOnly={true}>
            <S.Image src={image} alt={`${title} image`} />
          </S.ImageContainer>
        </S.Content>
        {getPointsList(items)}
      </Container>
    </S.SolutionDescriptionSection>
  )

  const ImageOnly = ({ title, image }) => (
    <S.SolutionDescriptionSection data-aos="fade-up">
      <Container center>
        <S.Title isImageOnly={true}>{title}</S.Title>
        <S.Content isBanner={false} isImageOnly={true}>
          <S.ImageContainer isBanner={false} isImageOnly={true}>
            <S.Image src={image} alt={`${title} image`} maxWidth="80%" />
          </S.ImageContainer>
        </S.Content>
      </Container>
    </S.SolutionDescriptionSection>
  )

  if (isImageOnly) {
    return <ImageOnly title={title} image={image} />
  }

  if (!isBanner) {
    return (
      <Regular
        title={title}
        image={image}
        description={description}
        items={items}
      />
    )
  }

  return (
    <Banner
      title={title}
      image={image}
      description={description}
      items={items}
    />
  )
}

export default SolutionDescriptionSection
