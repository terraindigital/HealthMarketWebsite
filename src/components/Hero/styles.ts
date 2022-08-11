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
  padding-top: 8.9rem;

  padding-left: 8.9rem;
  padding-right: 8.9rem;

  &.centered {
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 920px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
  }

  @media only screen and (max-width: 620px) {
    &.centered {
      display: block;
      min-height: auto;
      padding-top: 166px;
    }

    .home &.centered {
      padding-top: 97px;
    }
  }
`;

export const Img = styled.img`
  left: 0;
  min-height: 100%;
  object-fit: cover;
  min-width: 100%;
  position: absolute;
  top: 0;
  width: auto;
  z-index: -1;

  @media only screen and (max-width: 620px) {
    bottom: 0;
    top: auto;
  }
`

export const Inner = styled.div`
  margin: 0;

  &.half {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    flex-basis: 50%;
    width: 50%;
  }

  @media only screen and (max-width: 340px) {
    width: 100%;
  }
`;