import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  .contact-disclaimer {
    margin-bottom: 3.2rem;
  }
`

export const Wrapper = styled.div`
  //
`

export const HeroHeading = styled.h1`
  .hero.centered & {
    color: var(--color-dark);
    margin-bottom: 2.4rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .hero.centered.boxed & {
    color: var(--color-light);

    @media only screen and (max-width: 620px) {
      color: var(--color-primary);
    }
  }

  .hero.half & {
    color: var(--color-light);
    margin-bottom: 2.4rem;
    text-align: left;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.15);
  }
`

export const HeroSubheading = styled.h4`
  .hero.centered & {
    color: var(--color-dark);
    font-family: var(--font-body);
    margin-bottom: 4rem;
    text-align: center;
  }

  .hero.centered.boxed & {
    color: var(--color-light);

    @media only screen and (max-width: 620px) {
      color: var(--color-dark);
    }
  }

  .hero.half & {
    color: var(--color-dark);
    font-family: var(--font-body);
    margin-bottom: 4rem;
    text-align: left;
  }
`

export const InputGroup = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: space-between;

  input {
    flex-basis: calc(50% - (35px / 2));
    width: calc(50% - (35px / 2));
  }

  @media only screen and (max-width: 1200px) and (min-width: 1024px) {
    gap: 0;

    input {
      flex-basis: 100%;
      width: 100%;
    }
  }

  @media only screen and (max-width: 788px) {\
    gap: 0;

    input {
      flex-basis: 100%;
      width: 100%;
    }
  }
`