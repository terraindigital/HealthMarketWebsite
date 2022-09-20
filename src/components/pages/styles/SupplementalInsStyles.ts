import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  .full-rounded button {
    border-radius: 4px;
    padding-left: 6.5rem;
    padding-right: 6.5rem;
  }

  @media only screen and (max-width: 788px) {
    .hero + .section > .heading {
      display: flex;
    }

    .supplemental-insurance .hero + .section .heading h2 {
      max-width: 100%;
      padding-right: 3.6rem;
    }
  }
`

export const HeroHeading = styled.h1`
  color: var(--color-dark);
  margin-bottom: 2.4rem;
  text-align: center;
`

export const HeroSubheading = styled.h4`
  color: var(--color-dark);
  font-family: var(--font-body);
  margin-bottom: 4rem;
  text-align: center;
`

export const BestPriceImage = styled.img `
  display: block;
  left: 2.4rem;
  position: relative;
  top: 15px;

  @media only screen and (max-width: 1460px) {
    left: 0;
    max-height: 172px;
    top: 12px;
  }

  @media only screen and (max-width: 920px) {
    left: 0;
    max-height: 132px;
  }

  @media only screen and (max-width: 620px) {
    display: none;
  }
`

export const BestPriceImageMobile = styled.img `
  display: none;
  position: relative;
  left: -7rem;
  top: 0;

  @media only screen and (max-width: 620px) {
    display: block;
    right: 0;
    transform: translateX(calc(100% + 1.8rem));
  }

  @media only screen and (max-width: 340px) {
    display: none;
  }
`