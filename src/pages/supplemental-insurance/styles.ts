import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  .cards[class*=Wrapper] {
    justify-content: center;
  }

  .card {
    flex-basis: 33%;
    width: 33%;
  }
  
  .card:nth-of-type(3n-1),
  .card:nth-of-type(3n-2) {
    margin-right: 2.1rem;
  }

  .card:last-of-type {
    margin-right: 0;
  }
  
  .full-rounded button {
    border-radius: 4px;
    padding-left: 6.5rem;
    padding-right: 6.5rem;
  }

  @media only screen and (max-width: 620px) {
    .supplemental-insurance .hero {
      padding-bottom: 275px;
    }

    .supplemental-insurance .hero > img {
      object-position: 93%;
    }

    .supplemental-insurance .hero + .section .heading h1 {
      max-width: 315px;
    }
  
    .card:nth-of-type(3n-1),
    .card:nth-of-type(3n-2) {
      margin-right: 0px;
    }
  }
`

export const HeroHeading = styled.h1`
  color: var(--color-dark);
  font-size: 8rem;
  line-height: 110%;
  margin-bottom: 3.4rem;
  max-width: 1024px;
  text-align: center;

  @media only screen and (max-width: 620px) {
    font-size: 5rem;
  }
`

export const HeroSubheading = styled.h4`
  color: var(--color-dark);
  line-height: 110%;
  margin-bottom: 3.4rem;
  text-align: center;

  @media only screen and (max-width: 620px) {
    font-size: 1.6rem;
    font-weight: normal;
  }
`

export const PageHeroButtons = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  button {
    min-width: 305px;
  }

  @media only screen and (max-width: 620px) {
    button {
      font-size: 14px;
      min-width: 50%;
      padding: 11px;
    }
  }
`

export const PageHeroForm = styled.form`
  /* change to styled.form */
`

export const PageHeroInputGroup = styled.div`
  display: inline-block;
  margin-top: 3.4rem;
  position: relative;
  text-align: center;

  img {
    height: 18px;
    left: 14px;
    position: absolute;
    top: 50%;
    transform: translateY(-11px);
    z-index: 1;
  }

  @media only screen and (max-width: 620px) {
    width: 100%;
  }
`

export const PageHeroInput = styled.input`
  border-bottom: 2px solid var(--color-accent);
  border-left: none;
  border-right: none;
  border-top: none;
  color: var(--color-dark);
  display: block;
  margin: 0 auto;
  min-width: 61rem;
  padding: 2.1rem 2.1rem 2.1rem 4rem;
  position: relative;

  &::placeholder {
    color: var(--color-accent);
  }

  @media only screen and (max-width: 620px) {
    min-width: 100%;
  }
`

export const PageHeroCTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: no-wrap;

  img {
    margin-bottom: 0;
    margin-right: 0.8rem;
  }

  a, span {
    color: var(--color-dark);
  }
`

export const BestPriceImage = styled.img `
  display: block;
  left: 596px;
  position: absolute;
  top: 60px;

  @media only screen and (max-width: 920px) {
    left: 520px;
    max-height: 132px;
    top: 90px;
  }

  @media only screen and (max-width: 620px) {
    display: none;
  }
`

export const BestPriceImageMobile = styled.img `
  display: none;
  position: absolute;
  left: 329px;
  top: 29px;

  @media only screen and (max-width: 620px) {
    display: block;
  }

  @media only screen and (max-width: 395px) {
    display: none;
  }
`