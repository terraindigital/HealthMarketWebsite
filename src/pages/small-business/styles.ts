import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const PageStyles = css`
  .color-accent  { color: var(--color-accent);  }
  .color-primary { color: var(--color-primary); }

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
  padding-top: 14rem;
`

export const Cards = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  margin: 0 auto 7rem;
  max-width: calc(1140px + 17.8rem);

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

export const Card = styled.div`
  flex-basis: calc(33% - 3rem);
  padding: 0 1.5rem;
  width: calc(33% - 3rem);

  img {
    margin: 0 auto 3.2rem;
  }
`

export const Muted = styled.div`
  background-color: rgb(246, 244, 242);
`

export const MutedInner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin: 0 auto;
  max-width: calc(1140px + 17.8rem);

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

  img {
    flex-basis: 50%;
    width: 50%;

    margin: 0;
    max-width: 585px;
    padding-top: 3.2rem;
  }

  & > span {
    flex-basis: 50%;
    width: 50%;
    
    max-width: 585px;
    padding: 3.2rem 1.5rem 0;

    h3 {
      margin-bottom: 3.2rem;
    }

    p {
      font-size: 1.8rem;
      margin-bottom: 1.8rem;

      &:nth-of-type(2n+4) {
        margin-bottom: 4.5rem;
      }
    }
  }
`

export const Story = styled.div`
  background-image: ${props => `url('${props.bgImage}')`};
`

export const StoryInner = styled.div`
  margin: 0 auto;
  padding: 9.1rem 0 7.2rem;
  text-align: center;
  max-width: calc(1140px + 17.8rem);

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

  h2 {
    color: var(--color-light);
    font-size: 2.8rem;
    line-height: 1.5em;
    margin-bottom: 1.6rem;
  }

  figure {
    margin-bottom: 4.5rem;

    blockquote {
      color: var(--color-light);
      font-size: 4.8rem;
      font-style: italic;
      font-weight: bold;
      line-height: 1.5em;
      margin-bottom: 1.6rem;
    }

    figcaption {
      color: var(--color-light);
      font-size: 2.8rem;
      line-height: 1.5em;
    }
  }

  a {
    box-sizing: border-box;
  }
`

export const ShopCTA = styled.div`
  background-color: rgb(246,244,242);
`

export const ShopCTAInner = styled.div`
  margin: 0 auto;
  padding: 3.4rem 0 0.3rem;
  text-align: center;
  max-width: calc(622px + 17.8rem);

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

  h3 {
    font-size: 2.8rem;
    line-height: 1.5em;
  }

  h4 {
    font-weight: bold;
    line-height: 1.5em;
  }

  img {
    margin: 3.2rem auto 0.5rem;
    max-width: 177px;
  }
`

export const BenefitsResourcesWrapper = styled.div`
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

export const BenefitsResourcesInner = styled.div`
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

export const BenefitsResourcesChild = styled.div`
  display: flex;
  margin-bottom: 3.2rem;

  .benefits-resources-image,
  .benefits-resources-content {
    &:first-of-type {
      padding-right: 2.1rem;
    }

    &:last-of-type {
      padding-left: 2.1rem;
    }
  }

  .benefits-resources-image {
    flex-basis: calc(100% / 3);
    width: calc(100% / 3);
  }

  .benefits-resources-content {
    flex-basis: calc((100% / 3) * 2);
    width: calc((100% / 3) * 2);
  }
`