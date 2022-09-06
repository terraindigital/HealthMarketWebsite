import styled from "@emotion/styled";

export const HeroHeading = styled.h1`
  color: var(--color-light);
  margin-bottom: 2.4rem;
  text-align: center;
`

export const HeroSubheading = styled.h4`
  color: var(--color-light);
  font-family: var(--font-body);
  margin-bottom: 4rem;
  text-align: center;

  @media only screen and (max-width: 620px) {
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