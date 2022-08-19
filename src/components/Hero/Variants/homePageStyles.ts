import styled from "@emotion/styled";

export const HeroHeading = styled.h1`
  color: var(--color-light);
  font-size: 8rem;
  line-height: 110%;
  margin-bottom: 3.4rem;
  max-width: 1024px;
  text-align: center;

  @media only screen and (max-width: 620px) {
    font-size: 5rem;
  }
`

export const HeroSubheading = styled.h2`
  color: var(--color-light);
  font-family: var(--font-body);
  font-size: 2rem;
  line-height: 110%;
  margin-bottom: 3.4rem;
  text-align: center;

  @media only screen and (max-width: 620px) {
    font-size: 1.6rem;
    font-weight: normal;

    & + div .home-hero-buttons {
      display: flex;

      > button {
        flex-basis: 50%;
        width: 50%;
        font-size: 1.4rem;
        padding: 1.2rem;
      }
    }
  }
`