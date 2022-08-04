import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const PageStyles = css`
  .color-accent  { color: var(--color-accent);  }
  .color-primary { color: var(--color-primary); }
  .color-dark    { color: var(--color-dark);    }

  h1 {
    font-size: 3.6rem;
    font-weight: bold;
    line-height: 6.12rem;
    margin-bottom: 0.8rem;
  }

  h4 {
    font-size: 2.0rem;
    font-weight: normal;
  }

  .sb-hero-cta {
    font-size: 2.0rem;
    font-weight: bold;
  }

  .sb-hero-cta p {
    font-size: 2.0rem;
    font-weight: bold;
    margin-bottom: 0;
  }

  .button.button-orange {
    background-color: rgb(245,128,45);
    border: 1px solid rgb(245,128,45);
    border-radius: 6px;
    color: var(--color-light);
    font-size: 2rem;
    line-height: 1.33em;
    padding: 1rem 1.6rem;
  }
`

export const Hero = styled.div`
  background-image: ${props => `url('${props.bgImage}')`};
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 9.75rem;
  min-height: 352px;
  position: relative;

  padding-bottom: 2.1rem;
  padding-top: 2.1rem;

  padding-left: 8.9rem;
  padding-right: 8.9rem;

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 920px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
  }
`

export const HeroInner = styled.div`
  margin: auto;
  max-width: 1140px;
`

export const FocusImg = styled.div`
  bottom: 0;
  position: absolute;
  right: 0;
  width: 45%;

  img {
    margin-bottom: 0;
    max-width: 513px;
  }
`

export const Form = styled.form`
  margin: 3.4rem auto;
  padding: 0.2rem 0;
`

export const Input = styled.input`
  background-color: var(--color-light);
  border: 1px solid rgba(204,204,204,1);
  border-radius: 6px;
  box-shadow: 0px 1px 1px rgba(0,0,0,0.075);
  color: rgb(85,85,85);
  height: 49px;
  line-height: 2.667rem;
  margin-right: 0.4rem;
  padding: 1rem 1.6rem;
`

export const Submit = styled.button`
  background-color: rgb(245,128,45);
  border: 1px solid rgb(245,128,45);
  border-radius: 4px;
  color: var(--color-light);
  height: 49px;
  line-height: 2.4rem;
  padding: 0.6rem 1.2rem;
`

export const Banner = styled.div`
  background-color: ${props =>
    (props.color == "Green") ? "#69BE28" :
    (props.color == "Orange") ? "#F5802D" : "#009FDA"};
  color: var(--color-light);

  padding-bottom: 3.4rem;
  padding-top: 3.4rem;

  padding-left: 8.9rem;
  padding-right: 8.9rem;

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 920px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
  }
`

export const BannerInner = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  text-align: center;

  img {
    display: inline;
    filter: brightness(0) invert(1);
    margin-bottom: 0;
    margin-right: 1.3rem;
    max-height: 4.4rem;
    vertical-align: middle;
  }

  h2 {
    display: inline;
    font-size: 3.6rem;
    line-height: 1.5em;
    vertical-align: middle;
  }

  h3 {
    font-weight: normal;
    line-height: 1.5em;
  }
`

export const Wrapper = styled.div`
  //
`

export const Inner = styled.div`
  margin: 0 auto 3.3rem;
  max-width: calc(776px + 17.9rem);
  text-align: center;

  padding-bottom: 3.4rem;
  padding-top: 3.4rem;

  padding-left: 8.9rem;
  padding-right: 8.9rem;

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 920px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
  }

  & > img {
    margin: 0 auto 5.5rem;
    width: 129px;
  }

  & > p {
    line-height: 1.5em;
    margin-bottom: 1.6rem;
  }
`

export const Types = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3.5rem;
  text-align: left;
`

export const Type = styled.div`
  flex-basis: 50%;
  width: 50%;
  margin-bottom: 3.2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

export const TypeHeading = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 1.6rem 0;

  img {
    margin: 0 1.3rem 0 0;
    max-width: 76px;
  }

  h3 {
    font-weight: normal;
    line-height: 1em;
    max-width: 154px;
  }
`

export const TypeContent = styled.div`
  line-height: 1.5em;
`

export const TypeAction = styled.div`
  margin-top: 3.5rem;

  .button.button-primary {
    background-color: #009FDA;
    border: 1px solid #009FDA;
    border-radius: 4px;
    color: var(--color-light);
    line-height: 1.5em;
    padding: 0.6rem 1.2rem;
  }
`

export const CTABanner = styled.div`
  background-color: #F5802D;
  color: var(--color-light);
`

export const CTABannerInner = styled.div`
  margin: 0 auto;
  max-width: 746px;
  padding: 3.2rem 0;
  text-align: center;
`

export const CTABannerHeading = styled.div`
  margin-bottom: 6.4rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      display: inline;
      filter: brightness(0) invert(1);
      margin: 0;
      width: 52px;
    }

    h3 {
      font-size: 2.8rem;
      margin-left: 0.8rem;
    }

    & + h3 {
      font-weight: normal;
    }
  }

  h3 {
    line-height: 1.5em;
  }
`

export const CTABannerCTAWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  position: relative;

  &:after {
    content: 'or';
    bottom: 1.3rem;
    font-size: 2rem;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }
`

export const CTABannerCTA = styled.div`
  max-width: 287px;
`

export const CTABannerCTAContent = styled.div`
  img {
    display: inline;
    filter: brightness(0) invert(1);
    margin: 0 0 1.6rem 0;
  }
`

export const CTABannerCTAAction = styled.div`
  margin-top: 4.6rem;

  a {
    display: inline-block;
    background-color: var(--color-light);
    border: 1px solid var(--color-light);
    border-radius: 6px;
    color: #F5802D;
    font-size: 2rem;
    line-height: 1.5em;
    padding: 1rem 1.6rem;
    width: 100%;
  }
`

export const ResourcesWrapper = styled.div`
  padding-bottom: 3.2rem;
  padding-top: 3.2rem;

  padding-left: 8.9rem;
  padding-right: 8.9rem;

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 920px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
  }
`

export const ResourcesInner = styled.div`
  margin: 0 auto;
  max-width: calc(750px + 17.8rem);

  padding-left: 8.9rem;
  padding-right: 8.9rem;

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 920px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
  }

  & > h3 {
    border-bottom: 1px solid var(--color-primary);
    line-height: 1.5em;
    margin-bottom: 3.2rem;
    text-align: center;
  }
`

export const ResourcesChild = styled.div`
  display: flex;
  margin-bottom: 3.2rem;

  .resources-image,
  .resources-content {
    &:first-of-type {
      padding-right: 2.1rem;
    }

    &:last-of-type {
      padding-left: 2.1rem;
    }
  }

  .resources-image {
    flex-basis: calc(100% / 3);
    width: calc(100% / 3);
  }

  .resources-content {
    flex-basis: calc((100% / 3) * 2);
    width: calc((100% / 3) * 2);
  }
`