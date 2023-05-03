import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  .contact-disclaimer {
    margin-bottom: 3.2rem;
  }

  .contact-disclaimer.is-closed[data-disclaimer=medicare] {
    display: none;
    position: relative;
    top: -9999px;
    transition: top 0.22s ease-in;
  }

  .contact-disclaimer[data-disclaimer=medicare] {
    display: block;
    top: 0;
  }

  .button-container button {
    width: 100%;
  }

  @media only screen and (max-width: 1200px) {
    .contact-disclaimer {
      text-align: center;
    }

    .contact-disclaimer + button {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media only screen and (max-width: 1024px) {
    .button-container {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }

  /** ACA Insurance Plans */
  .aca-insurance-plans .hero .button-container:first-of-type {
    margin-bottom: 16px;
  }

  .aca-insurance-plans .medial > div {
    padding-bottom: 63px !important;
    padding-left: 28px !important;
    padding-right: 28px !important;
    padding-top: 63px !important;
  }
`

export const Wrapper = styled.div`
  //
`

export const HeroHeading = styled.h1`
  .hero & {
    color: var(--color-dark);
    margin-bottom: 2.4rem;
  }

  .hero.centered & {
    color: var(--color-dark);
    margin-bottom: 2.4rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .hero.centered.boxed & {
    color: var(--color-light);

    @media only screen and (max-width: 620px) {
      color: var(--color-primary);
    }
  }

  .hero.half & {
    color: var(--color-light);
    margin-bottom: 2.4rem;
    text-align: left;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.15);

    @media only screen and (max-width: 1200px) {
      text-align: center;
    }
  }

  .hero.open & {
    @media only screen and (max-width: 768px) {
      font-size: 36px;
      line-height: 120%;
    }
  }
`

export const HeroSubheading = styled.h4`
  .hero & {
    color: var(--color-dark);
    font-family: var(--font-body);
    margin-bottom: 4rem;

    @media only screen and (max-width: 620px) {
      color: var(--color-dark);
    }
  }

  .hero.centered & {
    color: var(--color-dark);
    font-family: var(--font-body);
    margin-bottom: 4rem;
    text-align: center;
  }

  .hero.centered.boxed & {
    color: var(--color-light);

    @media only screen and (max-width: 620px) {
      color: var(--color-dark);
    }
  }

  .hero.half & {
    color: var(--color-dark);
    font-family: var(--font-body);
    margin-bottom: 4rem;
    text-align: left;

    @media only screen and (max-width: 1200px) {
      text-align: center;
    }
  }
`

export const InputGroup = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: space-between;

  input {
    flex-basis: calc(50% - (35px / 2));
    width: calc(50% - (35px / 2));
  }

  @media only screen and (max-width: 1200px) and (min-width: 1024px) {
    gap: 0;

    input {
      flex-basis: 100%;
      width: 100%;
    }
  }

  @media only screen and (max-width: 788px) {\
    gap: 0;

    input {
      flex-basis: 100%;
      width: 100%;
    }
  }
`

export const FlyInForm = styled.div`
  background-color: var(--color-primary-light);
  border: 1px solid var(--color-primary-dark);
  left: 9999px;
  padding: 32px 40px;
  position: absolute;
  top: 40px;
  width: 100%;
  transition: left 0.22s ease-in-out;

  &.is-open {
    left: calc(100% + 5.5rem);
  }

  @media only screen and (max-width: 1280px) {
    top: 0;
  }

  @media only screen and (max-width: 1024px) {
    &.is-open {
      border: none;
      left: 0;
      top: 0;
      position: relative;
    }
  }
`

export const FormClose = styled.div`
  cursor: pointer;
  display: block;
  height: 23px;
  overflow: visible;
  position: absolute;
  right: 18px;
  top: 14px;
  width: 23px;

  &:after,
  &:before {
    border-top: 2px solid #7F7F7F;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    top: 10px;
    width: 100%;
  }

  &:before {
    transform: rotateZ(45deg);
  }

  &:after {
    transform: rotateZ(-45deg);
  }
`

export const FormHeading = styled.div`
  margin-bottom: 32px;

  h4 { margin-bottom: 8px; }
`

export const FormBody = styled.form`
  //

  .required {
    color: var(--color-dark);
    font-size: 12px;
    margin-bottom: 24px;
  }
`

export const FormInputGroup = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .group {
    flex-basis: calc(50% - 24px);
    width: calc(50% - 24px);
    position: relative;
  }

  @media only screen and (max-width: 1200px) and (min-width: 1024px) {
    gap: 0;

    input {
      flex-basis: 100%;
      width: 100%;
    }

    .group {
      flex-basis: calc(50% - 24px);
      width: calc(50% - 24px);
      position: relative;
    }
  }

  @media only screen and (max-width: 1024px) {
    .group {
      flex-basis: calc(50% - 12px);
      width: calc(50% - 12px);
      position: relative;
    }
  }

  @media only screen and (max-width: 600px) {
    .group {
      flex-basis: 100%;
      width: 100%;
    }
  }
`

export const FormInput = styled.div`
  font-size: 2rem;
  line-height: 140%;
  margin: 0 0 22px 0;
  padding: 21px 0 0 0;
  width: 100%;

  label {
    color: var(--color-dark);
    font-size: 12px;
    font-weight: 400;
    left: 0;
    line-height: 140%;
    position: absolute;
    top: 0;
  }

  input {
    background: var(--color-light);
    border: 2px solid #CECECE;
    border-radius: 4px;
    color: var(--color-dark);
    line-height: 48px;
    margin-bottom: 0;
    padding: 0 8px;
    width: 100%;
  }
`

export const FormFooter = styled.div`
  margin-top: 12px;
`

export const AcaMedial = styled.div`
  background-color: var(--color-primary-light);
  overflow-y: hidden;
  padding: 10.4rem 8.9rem;

  @media screen and (min-width: 1921px) {
    padding-left: 40rem;
    padding-right: 40rem;
  }

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 788px) {
    padding-left: 11rem;
    padding-right: 11rem;
    padding-bottom: 8rem;
    padding-top: 8rem;
  }

  @media screen and (max-width: 620px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
    padding-bottom: 4rem;
    padding-top: 4rem;
  }

  .chat-bubble {
    max-height: 129px;
  }

  @media only screen and (max-width: 1280px) {
    .chat-bubble {
      margin: 0 auto 2.1rem;
      max-height: 125px;
    }
  }

  @media only screen and (max-width: 900px) {
    .chat-bubble {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 620px) {
    .chat-bubble {
      max-height: 75px;
    }
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 28px;

    background-color: var(--color-light);
    border-radius: 4px;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
    padding: 63px 28px;

    h3 {
      color: var(--color-primary);
      font-size: 38px;
      line-height: 110%;
      margin: 0px;

      &:last-of-type {
        margin-bottom: 12px;
      }
    }

    h4 {
      font-size: 22px;
      line-height: 130%;
    }

    @media only screen and (max-width: 900px) {
      display: block;
      padding: 40px 28px;

      p {
        margin-bottom: 1.3rem;
        margin-top: 1.3rem;
      }

      h3 {
        font-size: 32px;
      }

      h4 {
        margin-bottom: 48px;
      }
    }
  }
`