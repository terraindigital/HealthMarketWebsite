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
`

export const HeroHeading = styled.h1`
  color: var(--color-dark);
  font-size: 8rem;
  line-height: 110%;
  margin-bottom: 3.4rem;
  max-width: 1024px;
  text-align: center;
`

export const HeroSubheading = styled.h4`
  color: var(--color-dark);
  line-height: 110%;
  margin-bottom: 3.4rem;
  text-align: center;
`

export const PageHeroForm = styled.div`
  /* change to styled.form */
`

export const PageHeroInputGroup = styled.div`
  display: inline-block;
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