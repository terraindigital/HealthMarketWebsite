import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`

  .full-rounded button {
    border-radius: 4px;
    padding-left: 6.5rem;
    padding-right: 6.5rem;
  }

  .hero img.show-at-mobile {
    object-position: bottom;
    display: block;
  }

  .hero img.hide-at-mobile {
    display: none;
    object-position: bottom right;
  }

  div.hero div.half {
    justify-content: flex-start;
  }

  #zipCodeForm {
    &> div:first-of-type div {
      &.accented {
        color: white;
      }
    }

    div.cta-phone {
      margin-left: 0.5em;
    }
  }

  .hero #zipCodeForm > div:first-of-type {
    width: 100%;

    &> div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 100%;
      min-width: none;
    }
  }

  .related-content .card-content p{
    color: #828282;
  }

  @media only screen and (min-width: 1025px) {

    .hero div.half {
      flex-basis: 72%;
      width: 72%;
    }

    .hero #zipCodeForm, .hero h4 {
      width: 60%;
    }

    .hero #zipCodeForm div:first-of-type {
      div {
        min-width: 0px;
        width: 50%;
      }
    }
  }

  .hero #zipCodeForm {
      .input.group {
        width: 100%;

        input.geocode.input {
          min-width: 0;
          width: 100%;
        }
      }
  } 

  @media only screen and (max-width: 788px) {
  
    div.hero {
      padding-bottom: 20em;
    }

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

  @media only screen and (min-width: 620px) and (max-width:1024px) {

    div.hero {
      padding-bottom: 42em;
    }
  }

  @media only screen and (min-width: 1025px) {
    .hero img.hide-at-mobile {
      display: block;
    }

    .hero img.show-at-mobile {
      display: none;
    }

    div.hero {
      padding-top: 9rem;

      #zipCodeForm {

        div.group.input {
          input {
            height: 110px;
          }
        }

        button {
          height: 70px;
        }
      }
      div.cta-phone {
        margin-top: 2em;
      }

      h1 {
        font-size: 120px;
      }
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1920px) {
    div.hero {
      margin-top: -60px;

        div.half {
          margin-top: 180px;
        }
    }
  }

  @media only screen and (min-width: 1920px) {
    div.hero {
      div.half {
        width: 90%;
        flex-basis: 90%;
      }
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

  @media only screen and min-width(1025px) {
    font-size: 120px;
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

export const SectionOneWrapper = styled.h1`
  div.flex-container p {
    line-height: 1.3;
    font-size: 16px;
    color: #828282;
    font-weight: 600;
  }

  @media only screen and (min-width: 1025px) {
    div.flex-container p {
      line-height: 1.4;
      font-size: 32px;
    }
  }
`