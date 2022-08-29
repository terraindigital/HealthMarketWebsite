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
    width: 100%;
  }

  @media only screen and (max-width: 620px) {
    .medicare .hero .half {
      display: block;
      flex-basis: 100%;
      text-align: center;
      width: 100%;
    }

    .medicare .hero + .section {
      padding-top: 4rem;
    }
  }
`

export const HeroHeading = styled.h1`
  color: var(--color-light);
  font-size: 8rem;
  line-height: 110%;
  margin-bottom: 3.4rem;
  max-width: 1024px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.15);

  @media only screen and (max-width: 620px) {
    font-size: 5rem;
  }
`

export const HeroSubheading = styled.h2`
  color: var(--color-light);
  font-family: var(--font-body);
  font-size: 2.4rem;
  line-height: 110%;
  margin-bottom: 3.4rem;

  @media only screen and (max-width: 620px) {
    color: var(--color-light);
    font-size: 2rem;
  }
`