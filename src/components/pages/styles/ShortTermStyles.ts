import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  .full-rounded button {
    border-radius: 4px;
    padding-left: 6.5rem;
    padding-right: 6.5rem;
  }

  .short-term-insurance.section .heading {
    align-items: flex-start;
  }

  .short-term-insurance.section .heading h2 {
    flex-basis: 50%;
  }

  .short-term-insurance.section .heading h4 {
    flex-basis: calc(50% - 9.6rem);
    width: calc(50% - 9.6rem);
    max-width: 100%;
  }

  .short-term-insurance.section .heading h4 > p {
    color: var(--color-dark);
    font-size: 32px;
    font-weight: 600;
  }

  .short-term-insurance.section .heading + div {
    display: flex;
    justify-content: flex-end;
  }
  
  .short-term-insurance.list.section .heading + div > div {
    flex-basis: calc(50% - 15.5rem);
    width: calc(50% - 15.5rem);
  }
  
  .short-term-insurance.accordion.section .heading + div > div {
    flex-basis: calc(50% - 9.6rem);
    width: calc(50% - 9.6rem);
  }

  .short-term-insurance.section .heading + div > div h4 {
    color: var(--color-primary);
    font-family: var(--font-heading);
    margin-bottom: 48px;
    margin-left: -6rem;
  }

  .short-term-insurance.section .heading + div > div ul li.list-item {
    font-size: 24px;
  }

  .short-term-insurance.section .heading + div > div ul li.list-item:first-of-type div:first-of-type {
    margin-top: -6px;
  }

  .short-term-insurance.section .heading + div > div ul li.list-item div:last-of-type {
    color: var(--color-dark);
  }

  .card .card-header h4.show-at-mobile {
    text-align: center;
  }

  @media only screen and (min-width: 821px) {
    .hero .half {
      flex-basis: 56% !important;
      width: 56% !important;
    }
  }

  @media only screen and (max-width: 820px) and (min-width: 789px) {
    .hero .half {
      display: block;
      flex-basis: 100%;
      text-align: center;
      width: 100%;
    }

    .hero .hide-at-mobile {
      display: none;
    }

    .hero .show-at-mobile {
      bottom: -32rem;
      display: block;
      object-position: bottom;
      top: auto;
    }

    .hero + .section {
      padding-top: 4rem;
    }
  }

  @media only screen and (max-width: 788px) {
    .short-term-insurance.hero {
      padding-bottom: 38.78rem;
    }

    .short-term-insurance.hero img.show-at-mobile {
      object-position: bottom;
      top: auto;
    }

    .hero .half {
      display: block;
      flex-basis: 100%;
      text-align: center;
      width: 100%;
    }

    .hero .show-at-mobile {
      top: 9rem;
    }

    .hero + .section {
      padding-top: 4rem;
    }

    .short-term-insurance.section .heading + div {
      display: block;
    }

    .short-term-insurance.list.section .heading + div > div {
      width: 100%;
    }

    .short-term-insurance.list.section .heading + div > div .list-item div:last-of-type {
      font-size: 16px;
    }

    .short-term-insurance.accordion.section .heading + div > div {
      width: 100%;
    }

    .section .accordion .title h2 {
      max-width: calc(100% - 26px);
    }

    .short-term-insurance.section .heading h4 {
      flex-basis: 100%;
      width: 100%;
      max-width: 100%;
    }

    .short-term-insurance.section .heading h4 > p {
      font-size: 16px;
      font-weight: 400;
    }

    .short-term-insurance.section .heading + div > div {
      flex-basis: 100%;
      width: 100%;
    }

    .short-term-insurance.section .heading + div > div h4 {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 620px) {
    .hero > img {
      bottom: -8rem;
      top: auto;
    }

    .full-rounded button {
      margin-top: 1.1rem;
    }

    .flexed.section + .hide-at-mobile + .section {
      padding-top: 0;
    }
  }
`

export const HeroHeading = styled.h1`
  color: var(--color-dark);
  margin-bottom: 2.4rem;

  @media only screen and (max-width: 620px) {
    color: var(--color-dark);
  }
`

export const HeroSubheading = styled.h4`
  color: var(--color-dark);
  font-family: var(--font-body);
  margin-bottom: 4rem;

  @media only screen and (max-width: 620px) {
    color: var(--color-dark);
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 320px;

  a:first-of-type {
    margin-bottom: 2.1rem;
  }

  button {
    max-width: 45rem;
    width: 100%;
  }

  button {
    width: 100%;
  }

  @media only screen and (max-width: 400px) {
    min-width: auto;
    max-width: 100%;
  }
`