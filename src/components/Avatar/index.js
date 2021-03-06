import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

// TODO: Verificar responsividade quando aumentar o tamanho da foto
const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  // TODO: Mover imagens de avatar e ícone para a pasta static

  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar