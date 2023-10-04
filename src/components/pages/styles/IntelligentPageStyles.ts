import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const IntelligentStyles = css`
  .hide-at-desktop{
    display:none;
  }

  {/* Hero Section */}

  .button-content{
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  .button-content img{
    filter: brightness(0) invert(1);
    width: 26px;
    height: 26px;
    padding: 0;
    margin-bottom: 0px;
  } 

  {/* Explore options  */}

  .flexed.section h2{
    padding-left: 90px;
  }

  .flexed.section .inner{
    padding-left: 90px;
  }

  .flexed.section h4{
    margin-top: 3rem;
    line-height: 3.5rem;
    color: #4D4D4D
  }

  .card-container{
    padding-left: 15rem;
    padding-right: 15rem;
  }

  @media only screen and (min-width: 620px) {
    .card-container .cards {
      a.hide-at-mobile {
        display: flex;
        align-items: center;

        div.card-content {
          padding-top: 60px;
          padding-bottom: 60px;
        }
      }
    }
  }

  .card-logo {
    padding: 0;
    margin: 0;
    width: 100px;
  }

  div.card-content h4 {
    text-align: center;
    color: #009B3A;
    font-size: 38px;
  }

  div.related-content a.card h4 {
    color: var(--color-primary);
  }

  .card-image{
    margin: 0 auto;
  }

  .card-p {
    text-align: center;
  }

  .card-link {
    display: block;
    text-align: center;
    text-decoration: underline;
    border: none !important;
    margin-top: 2rem;
  }

  // .shop-card-container .card-content {
  //   padding-bottom: 3rem;
  //   padding-top: 3rem;
  // }

  .shop-card-link {
    position: absolute;
    left: 32px;
    right: 32px;
    bottom: 0px;
    text-align: center;
    text-decoration: underline;
    border: none !important;
  }

   .chat-bubble {
      width: 160px;
      height: 124px;
  }

  .medial.primary.three-columns div div div{
    padding: 1.5rem 1rem 0rem;
   }

  .medial-header p{
    font-family: 'IvyPresto Display-SemiBold', serif;
    color: #009FDA;
    font-size: 51px;
  }

  .medial-header p:nth-child(2){
    color: #009FDA;
    font-size: 20px;
    font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  }

  .help-button-content {
    display: flex;
    font-size: 18px;
    justify-content: center;
  }

  .help-button-content img{
    filter: brightness(0) invert(1);
    width: 25px;
    height: 25px;
    margin-right: 1rem;
  } 

  .help-button-container button {
   padding-bottom: 0;
   padding: 0;
  }

  .shop-card-container {
    padding-left: 10rem;
    padding-right: 10rem;
  }

  .shop-card-container .cards a {
    border: 2px solid #009FDA;
    padding-bottom: 4rem;
    padding-top: 0rem;

    @media only screen and (max-width: 620px) {
      padding-top: 4rem
    }
  }

  .shop-card-container .line {
    text-align: center;
    color: #009B3A
  }

  .list-container heading {
    margin-top: -2rem;
  }

  .content-description {
    text-align: center;
  }

  .related-content h4 {
    color: #009FDA;
  }

  @media only screen and (min-width: 1460px) {
    .button-content img {
      width: 30px;
      height: 30px;
      margin-top: .25rem;
    }
  }

  @media only screen and (max-width: 1030px) {
    .hero .half {
      display: block;
      flex-basis: 100%;
      text-align: center;
      width: 100%;
    }

    .hero + .section {
      padding-top: 4rem;
    }

  .card-container{
    padding-left: 2rem;
    padding-right: 0rem;
  }

  .card-container .card:nth-of-type(3n-4) {
    margin-right: 2rem !important;
  }

  }

  @media only screen and (max-width: 620px) {
    .flexed.section h2 {
      padding: 2rem;
    }

    .flexed.section .inner{
      padding-left: 0px;
    }

  .flexed.section h4{
    text-align: left;
  }

  .card-container .card-header .show-at-mobile {
    font-size: 32px;
  }

  .card-content .card-link {
    font-size: 18px;
  }

  .card-container{
    padding-left: 2rem;
    padding-right: 2rem;
  }

  div.card-content h4 {
    font-size: 24px;
  }

  .card-image {
    width: 100px;
    height: 100px;
  }

  .card-p {
    padding-bottom: 0px;
  }

  div.card-header .show-at-mobile{
    text-align: center;
    color: #009B3A;
    font-size: 24px;
    padding-top: 60px;
  }

  .card-container .card:nth-of-type(3n-4) {
    margin-right: 0 !important;
  }

  .chat-bubble {
    width: 105px;
    height: 75px;
}

  .medial-header p{
    font-size: 32px;
  }

  .medial-header p:nth-child(2){
    font-size: 18px;
  }

  .medial.primary {
    padding: 2rem;
   }

   

  .shop-card-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .shop-card-container .card-header{
    min-height: 0px;
  }

  .shop-card-container .card-header .show-at-mobile{
    display: none;
  }

  // .shop-card-container .cards a {
  //   border: 2px solid #009FDA;
  //   padding-bottom: 4rem;
  //   padding-top: 0rem;

  //   @media only screen and (max-width: 620px) {
  //     padding-top: 4rem
  //   }

  //   &.shop-card-link {
  //     padding-bottom: 1rem;
  //     padding-top: 1rem
  //   }
  // }

}
`

export const HeroHeading = styled.h1`
  color: #4D4D4D;
  margin-bottom: 2.4rem;
  width: 80%;

  @media only screen and (max-width: 1030px) {
    width: 100%;
  }

  @media only screen and (max-width: 620px) {
    width: 100%;
    font-size: 48px !important;
    }
`;

export const HeroSubheading = styled.h4`
  color: #4D4D4D;
  font-family: var(--font-body);
  margin-bottom: 4rem;
  width: 70%;

  @media only screen and (max-width: 1030px) {
    width: 100%;
  }

  @media only screen and (max-width: 620px) {
    width: 100%;
    font-size: 20px !important;
    }

`;

export const FlexedSectionContainer = styled.div`
.heading {
    flex-basis: 1000%;
    width: 100%;
    left: 0;
  }

  h2 {
    font-size: 60px;
  }

  @media only screen and (max-width: 620px) {
    h2 {
      font-size: 40px;
    }
    }
`;
