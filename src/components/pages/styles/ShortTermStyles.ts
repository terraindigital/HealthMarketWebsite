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

  .healthmarkets22 .flexed.primary.section > div:first-of-type h2 {
    display: block;
  }

  @media only screen and (max-width: 820px) {
    .hero > img.show-at-mobile {
      bottom: -8rem;
      display: block;
      top: auto;
    }
    .hero > img.hide-at-mobile {
      display: none;
    }

    .full-rounded button {
      margin-top: 1.1rem;
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

    .short-term-insurance.section {
      padding-bottom: 16px;
    }

    .short-term-insurance.section .heading {
      display: block;
    }

    .short-term-insurance.section .heading > h2 {
      font-size: 40px !important;
    }

    .short-term-insurance.section .heading h4 {
      flex-basis: 100%;
      width: 100%;

      font-weight: 400;
      margin-top: 3.4rem;
    }

    .short-term-insurance.section .heading h4 > p {
      font-size: 16px;
      font-weight: 400;
      line-height: 19.2px;
    }

    .short-term-insurance.section .heading + div {
      display: block;
    }

    .short-term-insurance.list.section .heading + div > div {
      flex-basis: 100%;
      width: 100%;
    }

    .short-term-insurance.accordion.section .heading + div > div {
      flex-basis: 100%;
      width: 100%;
    }

    .short-term-insurance.section .heading + div > div h4 {
      font-size: 20px;
      line-height: 24px;
      margin-left: 2.4rem;
    }

    .short-term-insurance.section .heading + div > div ul {
      margin-bottom: 0;
      margin-left: 6.4rem;
    }

    .short-term-insurance.section .heading + div > div ul li div {
      font-size: 16px;
      line-height: 24px;
    }

    .short-term-insurance.section .heading + div > div ul li div:first-of-type,
    .short-term-insurance.section .heading + div > div ul li div:first-of-type:before {
      height: 27px;
      width: 27px;
    }

    .short-term-insurance.section .heading + div > div ul li div:first-of-type{
      left: -3.92rem;
    }

    .short-term-insurance.section > div:last-of-type .accordion .title h2 {
      font-family: var(--font-body);
      font-size: 20px;
      line-height: 26px;
    }

    .healthmarkets22 .flexed.primary.section {
      display: block;
    }

    .healthmarkets22 .flexed.primary.section > div:first-of-type h2 {
      display: inline-block;
    }

    .healthmarkets22 .flexed.primary.section > div:last-of-type {
      max-width: 100%;
      width: 100%;
    }

    .healthmarkets22 .flexed.primary.section > div:last-of-type .accordion .title h2 {
      font-family: var(--font-body);
      font-size: 20px;
      line-height: 26px;
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