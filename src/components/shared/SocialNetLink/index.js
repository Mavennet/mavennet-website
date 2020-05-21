import React from "react"

import { SOCIAL_NETWORK } from "../../../consts"

import * as S from "./styles"

const SocialNetLink = ({ socialNetwork, userTag }) => {
  const url = `${SOCIAL_NETWORK[socialNetwork].url}/${userTag}`
  const src = SOCIAL_NETWORK[socialNetwork].src

  return (
    <S.SocialNetLink href={url} target="_blank">
      <S.Image src={src} alt={`${socialNetwork} logo`} />
    </S.SocialNetLink>
  )
}

export default SocialNetLink
