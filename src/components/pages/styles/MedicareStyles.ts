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
    max-width: 38.6rem;
    width: 100%;
  }
  
  .card-disclaimer {
    font-size: 2rem;
    font-weight: 400;
    margin: 6.4rem auto 0;
    max-width: 106.8rem;
    text-align: center;
  }

  @media only screen and (max-width: 788px) {
    .medicare .hero .half {
      display: block;
      flex-basis: 100%;
      text-align: center;
      width: 100%;
    }

    .medicare .hero + .section {
      padding-top: 4rem;
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
    
    .medicare .hero > img {
      bottom: -8rem;
      top: auto;
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