import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  @media only screen and (max-width: 620px) {
    .resource-center .hero {
      padding-bottom: 275px;
    }

    .featured-cta {
      margin-bottom: 4.1rem;
      text-align: center;
    }

    .featured-cta a {
      color: var(--color-accent);
      text-decoration: underline;
    }
  }
`

export const HeroHeading = styled.h1`
  color: var(--color-primary);
  font-size: 8rem;
  line-height: 110%;
  margin-bottom: 3.4rem;
  max-width: 1024px;
  text-align: center;

  @media only screen and (max-width: 620px) {
    font-size: 4.5rem;
  }
`

export const HeroSubheading = styled.h3`
  color: var(--color-dark);
  font-family: var(--font-body);
  line-height: 110%;
  margin-bottom: 0;
  text-align: center;

  @media only screen and (max-width: 620px) {
    font-size: 1.8rem;
  }
`