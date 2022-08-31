import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  .full-rounded button {
    border-radius: 4px;
    padding-left: 6.5rem;
    padding-right: 6.5rem;
  }

  @media only screen and (max-width: 620px) {
    .health-insurance .hero .half {
      display: block;
      flex-basis: 100%;
      text-align: center;
      width: 100%;
    }

    .health-insurance .hero + .section {
      padding-top: 4rem;
    }
  }
`

export const HeroHeading = styled.h1`
  color: var(--color-light);
  margin-bottom: 3.4rem;

  @media only screen and (max-width: 620px) {
    color: var(--color-dark);
    font-size: 5rem;
  }
`

export const HeroSubheading = styled.h4`
  color: var(--color-light);
  font-family: var(--font-body);
  margin-bottom: 3.4rem;

  @media only screen and (max-width: 620px) {
    color: var(--color-dark);
    font-size: 2rem;
  }
`