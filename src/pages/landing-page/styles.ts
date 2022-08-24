import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Search from "../../images/search-green.png";

export const PageStyles = css`
  & [name="heroLocationInput"] {
    max-width: 62rem;
    width: 100%;
  }

  .listCta {
    margin-top: 4rem;
    text-align: center;
  }

  .centered.hero {

    @media only screen and (min-width: 921px) {
      padding-top: 9.8rem;
      padding-bottom: 11rem;
    }

    > div {
      position: relative;

      @media only screen and (min-width: 621px) {
        background-color: var(--color-primary);
        padding: 4rem;
      }

      @media only screen and (min-width: 921px) {        
        padding: 4rem 16.5rem;
      }
      

      h1 {
        text-align: center;      
        line-height: 1;
        color: var(--color-light);

        @media only screen and (max-width: 620px) {
          color: var(--color-primary);
        }
      }

      p {
        color: var(--color-light);
        text-align: center;
        margin-bottom: 4rem;
        margin-left: auto;
        margin-right: auto;

        @media only screen and (max-width: 620px) {
          color: var(--color-dark);
        }
      }

      form {
        text-align: center;
      }
    }    
  }

  & .review {
    figcaption {
      button {
        background: transparent;
        color: var(--color-accent);
        border: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        text-decoration: underline;
        outline: none;
      }
    }
  }

  & .reviews.primary {
    figcaption {
      button {
        color: var(--color-primary);
      }
    }
  }
  
  .hero {
    position: relative;

    button {
      max-width: 28.4rem;
      width: 100%;
    }

    .left {
      form {
        button {
          display: none;
        }
      }
    }

    @media only screen and (max-width: 620px) {
      > * {
        z-index: 1;
      }

      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 60%;
        background-image: linear-gradient(180deg, #908395 70.15%, rgba(144, 131, 149, 0) 98.79%);
        z-index: 0;
      }

      .show-at-mobile {
        object-fit: contain!important;
        object-position: bottom!important;
      }

      button {
        max-width: 100%;        
      }

      .left {
        max-width: 40rem!important;
        margin-left: auto;
        margin-right: auto;
        
        > div {
          width: 100%;
          margin-top: -1rem;

          label > img {
            display: none;
          }

          label {
            left: 50%;
            transform: translate(-90px, -11px);

            &:before {
              content: "";
              background-image: url(${Search});
              background-repeat: no-repeat;
              background-size: cover;
              
              width: 18px;
              height: 18px;
              display: block;
            }
          }

          input[type="text"] {
            text-align: center;
          }
        }
      }
    }
  }

  & .campaign-b {
    .hero {

      @media only screen and (min-width: 921px) {
        .left {
          padding-top: 10.9rem;
        }
      }

      h1 {
        color: var(--color-light);
        text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.15);
      }

      p {
        margin-bottom: 4rem;
      }

      @media only screen and (max-width: 620px) {
        &:before {
          background: linear-gradient(180deg, #99D0F5 85.25%, rgba(153, 208, 245, 0) 98.79%);
        }

        .left {
          padding-bottom: 29.6rem;

          form div {
            justify-content: center;
          }
        }
      }

      @media only screen and (max-width: 480px) {
        &:before {
          height: 80%;
        }
      }
    }
  }

  & .campaign-c {
    .hero {
      position: relative;

      @media only screen and (max-width: 620px) {
        padding-bottom: 34rem;

        &:before {
          background: linear-gradient(180deg, #B3D9E4 89.94%, rgba(179, 217, 228, 0) 98.79%);
        }

        &.centered > div {
          max-width: 40rem;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
        }
      }
    }

    .show-at-mobile.primary {
      @media only screen and (max-width: 620px) {
        .star path {
          fill: var(--color-primary);
        }

        .review {
          &:before {
            background-color: var(--color-primary-light);
            width: 100%;
          }

          > div {
            justify-content: center;
          }

          blockquote,
          figcaption {
            text-align: center;
          }
        }
      }

      .cta {
        color: var(--color-primary);
      }
    }

    .section {
      .heading {
        justify-content: center;
        width: 100%;
        transform: none;

        h2 {
          background-color: transparent;
          color: var(--color-primary);
          padding: 1.5rem;

          @media only screen and (max-width: 620px) {
            max-width: 100%;
            width: 100%;
            text-align: center;
            font-size: 3.4rem;
          }
        }
      }

      &.List {

        @media only screen and (min-width: 921px) {
          ul {
            display: flex;
            flex-wrap: wrap;

            > li {
              flex: 1 0 calc(50% - 5rem);
              max-width: calc(50% - 5rem);
              margin-left: 5rem;           
            }
          }
        }
      }

      &.Icons {
        @media only screen and (min-width: 921px) {
          .heading + div {
            padding-top: 0;
          }
        }
      }
    }
  }
`

export const HeroHeading = styled.h1`
  font-family: var(--font-heading);
  font-size: 9rem;
  color: var(--color-primary);
  line-height: 1;
  font-weight: 600;
  margin-bottom: 2.4rem;
  max-width: 1024px;
  
  br {
    display: none;
  }

  @media only screen and (max-width: 1300px) {
    font-size: 6rem;
    max-width: 700px;
  }

  @media only screen and (max-width: 620px) {
    font-size: 5rem;
    color: var(--color-light);
    text-align: center;
    margin-bottom: 1.6rem;
    line-height: 0.9;
    margin-left: auto;
    margin-right: auto;

    br {
      display: block;
    }
  }
`

export const HeroSubheading = styled.p`
  font-family: var(--font-body);
  font-size: 2.4rem;
  line-height: 1.5;
  margin-bottom: 0;
  max-width: 72rem;

  @media only screen and (max-width: 620px) {
    font-size: 2rem;
    color: var(--color-light);
    font-size: 2rem;
    line-height: 1.2;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`