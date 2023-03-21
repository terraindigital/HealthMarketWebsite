import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 320px;
  }

  .button-container a:first-of-type {
    margin-bottom: 2.1rem;
  }

  .button-container button {
    max-width: 45rem;
    width: 100%;
  }
  
  .hero-disclaimer {
    color: var(--color-light);
    font-size: 2rem;
    font-weight: 400;
  }

  .card-disclaimer {
    font-size: 2rem;
    font-weight: 400;
    margin: 6.4rem auto 0;
    max-width: 106.8rem;
    text-align: center;
  }

  .card-link > p:first-of-type {
    margin-bottom: 23px;
  }

  .flexed.section.primary {
    padding-bottom: 0;
  }

  @media only screen and (max-width: 788px) {
    .hero .half {
      display: block;
      flex-basis: 100%;
      text-align: center;
      width: 100%;
    }

    .hero + .section {
      padding-top: 4rem;
    }

    .button-container button {
      max-width: 38.6rem;
    }
  
    .card-disclaimer {
      font-size: 1.6rem;
      margin-top: 2.7rem;
    }
  }

  @media only screen and (max-width: 620px) {
    .button-container {
      min-width: 100%;
    }

    .hero .half .light a,
    .hero .half .light p {
      color: var(--color-dark);
    }

    .hero .half .light img {
      filter: none;
    }
    
    .hero > img {
      bottom: -8rem;
      top: auto;
    }

    .hero-disclaimer {
      color: var(--color-dark);
    }

    .card-header .icon {
      margin-left: 24px;
    }
  }
`

export const HeroHeading = styled.h1`
  color: var(--color-light);
  margin-bottom: 2.4rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.15);

  @media only screen and (max-width: 620px) {
    color: var(--color-dark);
  }
`

export const HeroSubheading = styled.h4`
  color: var(--color-light);
  font-family: var(--font-body);
  margin-bottom: 4rem;

  @media only screen and (max-width: 620px) {
    color: var(--color-dark);
  }
`

export const GuideCTA = styled.div`
  background-color: var(--color-primary-light);
  text-align: center;
  padding-left: 8.9rem;
  padding-right: 8.9rem;

  @media screen and (min-width: 1921px) {
    padding-left: 40rem;
    padding-right: 40rem;
  }

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 788px) {
    padding-left: 4.8rem;
    padding-right: 4.8rem;
  }

  @media screen and (max-width: 620px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
    text-align: left;
  }

  & > div {
    padding-bottom: 2rem;
    font-size: 2rem;
  }
`

export const PostAccordionText = styled.div`
  margin-top: 104px;

  p {
    font-size: 32px;
  }

  @media only screen and (max-width: 620px) {
    margin-top: 40px;

    p {
      font-size: 16px;
      text-align: left;
    }
  }
`

export const HeroHeadingLight = styled.h1`
  color: var(--color-light);
  margin-bottom: 2.4rem;
  text-align: center;
`

export const HeroSubheadingLight = styled.h4`
  color: var(--color-light);
  font-family: var(--font-body);
  margin-bottom: 4rem;
  text-align: center;
`

export const HeroCta = styled.span`
  p {
    a {
      text-decoration: none;
    }
  }
`

export const HeroDisclaimerLight = styled.span`
  color: var(--color-light);
  margin-top: 16px;
  p {
    a {
      text-decoration: none;
      color: var(--color-light);
    }
  }
`
