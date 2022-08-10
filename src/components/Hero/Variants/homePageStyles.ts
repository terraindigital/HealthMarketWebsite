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

export const HeroSubheading = styled.h4`
  color: var(--color-light);
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

export const HomePageHeroForm = styled.div`
  @media only screen and (max-width: 620px) {
    & > div + button {
      font-size: 1.6rem;
      width: 100%;
    }
  }
`

export const HomePageHeroInputGroup = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;

  img {
    height: 18px;
    left: 14px;
    position: absolute;
    top: 50%;
    transform: translateY(-11px);
    z-index: 1;
  }

  @media only screen and (max-width: 620px) {
    display: block;
  }
`

export const HomePageHeroInput = styled.input`
  border-bottom: 2px solid var(--color-accent);
  border-left: none;
  border-right: none;
  border-top: none;
  color: var(--color-dark);
  display: block;
  margin: 3.4rem auto;
  min-width: 32rem;
  padding: 2.1rem 2.1rem 2.1rem 4rem;
  position: relative;

  &::placeholder {
    color: var(--color-accent);
  }

  @media only screen and (max-width: 620px) {
    width: 100%;
  }
`