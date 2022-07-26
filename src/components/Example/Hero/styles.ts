import styled from "@emotion/styled"
import { StaticImage } from 'gatsby-plugin-image'

export const Wrapper = styled.div`
  display: flex;
  min-height: 600px;
  min-height: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  padding-bottom: 8.9rem;
  padding-left: 8.9rem;
  padding-right: 8.9rem;
  padding-top: 14.4rem;

  &.centered {
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }

  @media screen and (max-width: 1044px) {
    padding-left: 55px;
    padding-right: 55px;
  }

  @media screen and (max-width: 920px) {
    padding-left: 21px;
    padding-right: 21px;
  }
`;

export const Img = styled.img`
  left: 0;
  min-height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: auto;
  z-index: -1;
`

export const Inner = styled.div`
  margin: 0;

  &.half {
    flex-basis: 50%;
    width: 50%;
  }
`;