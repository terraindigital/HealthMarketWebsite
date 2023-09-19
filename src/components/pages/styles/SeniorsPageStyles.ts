import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`

  .full-rounded button {
    border-radius: 4px;
    padding-left: 6.5rem;
    padding-right: 6.5rem;
  }

  #zipCodeForm {
    &> div:first-of-type div {
      color: #69BE28;
      &.accented {
        color: white;
        background-color: #69BE28;
      }
    }

    div.geocode {
      input::placeholder {
        color: #69BE28;
      }
    }

    button {
      background-color: #69BE28;
    }

    div.cta-phone {
      margin-left: 0.5em;
    }
  }

  @media only screen and (max-width: 788px) {
    .hero .half {
      display: block;
      flex-basis: 100%;
      text-align: center;
      width: 100%;
    }

    .hero + .section {
      padding-top: 4rem;
    }

    .section + .flexed.section {
      background-color: var(--color-light);
    }

  }

  @media only screen and (max-width: 620px) {


.hero > img {
width: 100%;
height: 100%;
}

    .full-rounded button {
      margin-top: 1.1rem;
    }

    .flexed.section + .hide-at-mobile + .section {
      padding-top: 0;
    }

.hero .button {
    color: var(--color-light)
}

flex-container p {
    text-align: left
}

  }
`

export const HeroHeading = styled.h1`
  color: var(--color-light);
  margin-bottom: 2.4rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.15);

    @media only screen and (max-width: 620px) {
    color: var(--color-light);
  }
`

export const HeroSubheading = styled.h4`
  color: var(--color-light);
  font-family: var(--font-body);
  margin-bottom: 4rem;

  @media only screen and (max-width: 620px) {
    color: var(--color-light);
    
  }
`

