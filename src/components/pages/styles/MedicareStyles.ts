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

  .hero .cta-phone {
    max-width: 820px;

    span a {
      text-decoration: none;
    }
  }

  .hero #zipCodeForm > div:first-of-type {
    width: 100%;

    &> div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (min-width: 1025px) {

    .hero div.half {
      flex-basis: 72%;
      width: 72%;
    }

    .hero #zipCodeForm, .hero h4 {
      width: 70%;
    }

    .hero #zipCodeForm div:first-of-type {
      div {
        min-width: 0px;
        width: 50%;
      }
    }
  }

  .hero #zipCodeForm {
      .input.group {
        width: 100%;

        input.geocode.input {
          min-width: 0;
          width: 100%;
        }
      }
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
    
    .hero > img {
      bottom: -8rem;
      top: auto;
    }

    .hero > img.show-at-mobile {
      object-position: bottom;
      bottom: -2rem;
    }
  }

  @media only screen and (max-width: 480px) {
    div.hero {
      padding-bottom: 34rem;
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 788px) {
    div.hero {
      padding-bottom: 46rem;
    }
  }

  @media only screen and (min-width: 620px) and (max-width: 1680px) {
    .hero img.hide-at-mobile {
      object-position: bottom right;
    }
  }

  @media only screen and (min-width: 1281px){
    .medicare.hero{
      padding-top: 3.4375rem
    }

    #zipCodeForm {
      width: 80%;
    }
  }

  @media only screen and (min-width: 620px) and (max-width: 1024px) {
    .hero #zipCodeForm > div:first-of-type {
      flex-direction: column;
      width: 100%;
      margin: auto;

      &> div {
        width: 100%;
      }
    }

  }

  @media only screen and (min-width: 1380px) {
    .hero #zipCodeForm div:first-of-type {
      max-width: 820px;
    }
  }

  @media only screen and (min-width: 1280px) {
    div.hero {
      padding-top: 5em;
    }
  }

  @media only screen and (max-width: 1024px) {
    .hero {
      flex-basis: 100%;
      width: 100%;
    }
  }
`

export const HeroHeading = styled.h1`
  color: var(--color-light);
  margin-bottom: 2.4rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.15);
`

export const HeroSubheading = styled.h4`
  color: var(--color-light);
  font-family: var(--font-body);
  margin-bottom: 4rem;

  @media only screen and (max-width: 620px) {
    color: var(--color-light);
  }
`