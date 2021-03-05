import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 12rem;
  margin: auto;
  margin-bottom: 1.5rem;
  width: 12rem;

  ${media.lessThan("large")`
    height: 2.2rem;
    width: 2.2rem;
    margin-bottom: 0;
  `}
`
