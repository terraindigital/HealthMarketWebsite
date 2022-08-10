import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  .full-rounded button {
    border-radius: 4px;
    padding-left: 6.5rem;
    padding-right: 6.5rem;
  }

  @media only screen and (max-width: 620px) {
    .dental-insurance .hero {
      padding-bottom: 275px;
    }

    .dental-insurance .hero .half {
      display: block;
      flex-basis: 100%;
      text-align: center;
      width: 100%;
    }
  }
`

export const HeroHeading = styled.h1`
  color: var(--color-light);
  font-size: 8rem;
  line-height: 110%;
  margin-bottom: 3.4rem;
  max-width: 1024px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.15);

  @media only screen and (max-width: 620px) {
    font-size: 5rem;
  }
`

export const HeroSubheading = styled.h4`
  color: var(--color-dark);
  line-height: 110%;
  margin-bottom: 3.4rem;

  @media only screen and (max-width: 620px) {
    font-size: 2rem;
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

export const PageHeroForm = styled.div`
  /* change to styled.form */
`

export const PageHeroInputGroup = styled.div`
  display: inline-block;
  position: relative;

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
  margin: 3.4rem auto;
  min-width: 32rem;
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
  flex-wrap: no-wrap;

  img {
    margin-bottom: 0;
    margin-right: 0.8rem;
  }

  a, span {
    color: var(--color-dark);
  }

  @media only screen and (max-width: 620px) {
    justify-content: center;
  }
`