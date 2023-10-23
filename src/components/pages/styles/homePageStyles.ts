import styled from "@emotion/styled";
import {css} from "@emotion/react";

export const PageStyles = css`

.hero img.show-at-mobile {
  object-position: top;
  display: block;
}

.hero img.hide-at-mobile {
  object-position: bottom left;
  display: none;
}

#zipCodeForm .cta-phone p a {
  text-decoration: none;
  font-weight: 400;
}

.hero > div:last-of-type > div:last-of-type {
    display: flex;

    &> div:last-of-type {
      margin: auto;
    }
}

.hero div.flip-clock {
  --fcc-label-color: #4D4D4D
}

@media only screen and (max-width: 480px) {
  div.hero {
    padding-bottom: 18em;
  }
}

@media only screen and (min-width: 480px) and (max-width: 1024px) {
  div.hero {
    padding-bottom: 36em;
  }

  .hero img.show-at-mobile {
    top: 80px;
  }
}

@media only screen and (max-width: 1025px) {
  #zipCodeForm > div {
    width: 100%;

    &.geocode > div.input {
      width: 100%;
      input {
        min-width: none;
        max-width: none;
        width: 100%;
      }
    }
  }

  #zipCodeForm > div:first-of-type > div{
    width: 100%;
  }

  #zipCodeForm button {
    max-width: 100%;
  }
}

@media only screen and (min-width: 1025px) {
  div.hero {
    padding-top: 6em;
  }

  .hero img.show-at-mobile {
    display: none;
  }
  
  .hero img.hide-at-mobile {
    display: block;
  }

  #zipCodeForm .cta-phone {
    margin-top: 2em;
    margin-bottom: 2em;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }


  #zipCodeForm .geocode input {
    height: 105px;
  }
}

@media only screen and (min-width: 1680px) {
  div.hero {
    padding-top: 9em;
    padding-bottom: 12em;
  }
}
`

export const HeroHeading = styled.h1`
  color: var(--color-dark);
  margin-bottom: 0.5em;
  text-align: center;

  @media only screen and (max-width: 620px) {
    font-size: 5rem;
  }
`

export const HeroSubheading = styled.h4`
color: var(--color-dark);
  font-family: var(--font-body);
  margin-bottom: 1.5em;
  text-align: center;

  @media only screen and (max-width: 620px) {
    margin-bottom: 3.2rem;

    & + div .home-hero-buttons {
      display: flex;

      > button {
        flex-basis: 50%;
        width: 50%;
        font-size: 1.4rem;
        padding: 1.2rem;
      }
    }
  }

  @media only screen and (min-width: 1025px) {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
`