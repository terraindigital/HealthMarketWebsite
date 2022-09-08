import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  .how-we-help .split-section .inner h3 {
    color: var(--color-primary);
  }

  .how-we-help .split-section .inner p {
    padding: 3.2rem 0;
  }

  @media only screen and (max-width: 788px) {
    .how-we-help .hero {
      padding-bottom: 197px;
    }

    .how-we-help .hero > img {
      object-position: 95%;
    }

    .how-we-help .hero + .section {
      padding-top: 3.4rem;
    }

    .how-we-help .hero + .section > div[class*=Heading] {
      width: calc(100% + 3.4rem);
    }

    .how-we-help .split-section {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }

    .how-we-help .split-section + .split-section {
      padding-top: 0rem;
    }

    .how-we-help .split-section .inner {
      background-color: var(--color-light);
      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
      padding: 3rem 1.6rem 4rem;
    }

    .how-we-help .split-section .inner img {
      margin: 0;
    }

    .how-we-help .split-section .inner h3 {
      padding: 2.4rem 0 0.8rem;
    }

    .how-we-help .split-section .inner p {
      font-size: 1.8rem;
      line-height: 120%;
      padding: 0.8rem 0 2.4rem;
    }

    .how-we-help .split-section .inner button {
      border-radius: 4px;
      width: 100%;
    }
  }

  .how-we-help .split-section + .section.light {
    padding-top: 4rem;
  }

  .how-we-help .split-section + .section.light + .section.primary > div[class*=Heading] {
    width: calc(100% + 8.9rem);
  }

  .how-we-help .split-section + .section.light + .section.primary .heading h2 {
    max-width: 50%;
  }

  .how-we-help .split-section + .section.light + .section.primary .card > div:first-of-type h2 {
    font-size: 2rem;
  }

  .how-we-help .split-section + .section.light + .section.primary .card > div:first-of-type p {
    display: none;
  }

  @media only screen and (max-width: 788px) {
    .how-we-help .split-section + .section.light + .section.primary .heading h2 {
      max-width: 100%;
    }
  }
`

export const HeroHeading = styled.h1`
  margin-bottom: 2.4rem;
  text-align: center;
`

export const HeroSubheading = styled.h4`
  font-family: var(--font-body);
  margin-bottom: 4rem;
  text-align: center;
`