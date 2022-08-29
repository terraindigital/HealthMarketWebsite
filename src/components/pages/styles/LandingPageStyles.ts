import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  /* TODO: Responsive; Responsive tweaks for lp template */
`

export const Wrapper = styled.div`
  //
`

export const HeroHeading = styled.h1`
  .hero.centered & {
    color: var(--color-dark);
    font-size: 8rem;
    line-height: 110%;
    margin-bottom: 3.4rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
    text-align: center;

    @media only screen and (max-width: 620px) {
      font-size: 5rem;
    }
  }

  .hero.centered.boxed & {
    color: var(--color-light);

    @media only screen and (max-width: 620px) {
      color: var(--color-primary);
    }
  }

  .hero .half & {
    color: var(--color-light);
    font-size: 8rem;
    line-height: 110%;
    margin-bottom: 3.4rem;
    max-width: 1024px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.15);
  
    @media only screen and (max-width: 620px) {
      font-size: 5rem;
    }
  }
`

export const HeroSubheading = styled.h2`
  .hero.centered & {
    color: var(--color-dark);
    font-family: var(--font-body);
    font-size: 2.4rem;
    line-height: 110%;
    margin-bottom: 3.4rem;
    text-align: center;

    @media only screen and (max-width: 620px) {
      font-size: 1.6rem;
      font-weight: normal;
    }
  }

  .hero.centered.boxed & {
    color: var(--color-light);

    @media only screen and (max-width: 620px) {
      color: var(--color-dark);
    }
  }

  .hero .half & {
    color: var(--color-dark);
    font-family: var(--font-body);
    font-size: 2.4rem;
    line-height: 110%;
    margin-bottom: 3.4rem;
  
    @media only screen and (max-width: 620px) {
      font-size: 2rem;
    }
  }
`