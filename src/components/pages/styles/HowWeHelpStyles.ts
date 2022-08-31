import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  @media only screen and (max-width: 620px) {
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

    .how-we-help .split-section .inner h1 {
      font-size: 3.6rem;
      line-height: 115%;
    }

    .how-we-help .split-section .inner p {
      font-size: 1.8rem;
      line-height: 120%;
    }

    .how-we-help .split-section .inner button {
      border-radius: 4px;
      width: 100%;
    }
  }

  .how-we-help .split-section + .section.light {
    padding-top: 4rem;
  }

  .how-we-help .accordion .title h2 {
    max-width: 285px;
  }

  .how-we-help .split-section + .section.light + .section.primary > div[class*=Heading] {
    width: 100%;
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
`

export const HeroHeading = styled.h1`
  margin-bottom: 3.4rem;
  text-align: center;

  @media only screen and (max-width: 620px) {
    font-size: 4.5rem;
  }
`

export const HeroSubheading = styled.h4`
  font-family: var(--font-body);
  margin-bottom: 0;
  text-align: center;

  @media only screen and (max-width: 620px) {
    font-size: 2rem;
  }
`