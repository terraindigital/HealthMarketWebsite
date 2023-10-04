import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`

.hero #zipCodeForm > div:first-of-type {
  width: 100%;

  &> div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.section .heading {
  align-items: flex-start;
}

.section .heading h2 {
  flex-basis: 50%;
}

.section .heading h4 {
  flex-basis: calc(50% - 9.6rem);
  width: calc(50% - 9.6rem);
  max-width: 100%;
  font-weight: 600;
  font-size: 32px;
  color: var(--color-dark)
}

@media only screen and (min-width: 1025px) {

  .hero div.half {
    flex-basis: 72%;
    width: 72%;
  }

  .hero #zipCodeForm, .hero h4 {
    width: 70%;
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
  .hero .half {
    display: block;
    flex-basis: 100%;
    text-align: center;
    width: 100%;
  }


  .button-container button {
    max-width: 38.6rem;
  }

  .card-disclaimer {
    font-size: 1.6rem;
    margin-top: 2.7rem;
  }
}

@media only screen and (max-width: 620px) {
  .button-container {
    min-width: 100%;
  }
  
  .hero > img {
    bottom: -8rem;
    top: auto;
  }

  .hero > img.show-at-mobile {
    object-position: bottom;
    bottom: -2rem;
  }
}

@media only screen and (max-width: 480px) {
  div.hero {
    padding-bottom: 34rem;
  }
}

@media only screen and (min-width: 480px) and (max-width: 788px) {
  div.hero {
    padding-bottom: 46rem;
  }
}

@media only screen and (min-width: 620px) and (max-width: 1680px) {
  .hero img.hide-at-mobile {
    object-position: center;
  }
}

@media only screen and (min-width: 1281px){
  .medicare.hero{
    padding-top: 3.4375rem
  }

  #zipCodeForm {
    width: 80%;
  }
}

@media only screen and (min-width: 620px) and (max-width: 1024px) {
  .hero #zipCodeForm > div:first-of-type {
    flex-direction: column;
    width: 100%;
    margin: auto;

    &> div {
      width: 100%;
    }
  }

}

@media only screen and (min-width: 1380px) {
  .hero #zipCodeForm div:first-of-type {
    max-width: 820px;
  }
}

@media only screen and (min-width: 1280px) {
  div.hero {
    padding-top: 5em;
  }
}

@media only screen and (max-width: 1024px) {
  .hero {
    flex-basis: 100%;
    width: 100%;
  }
}

@media only screen and (max-width: 788px) {
  .section .heading h2{
    padding: 1rem 3rem;
    width: 100%;
    font-size: 36px;
  }
  
  .section .heading h4{
    font-size: 16px;
    font-weight: 200;
    line-height: 19.2px;
    width: 100%;
  }

  .card-header h4 {
    text-align: center;
  }
}


`;

export const TierWrapper = styled.div`

p {
  color: var(--color-dark)
}

.affordable-plans {
  margin-bottom: 3rem;
  text-align: center;
  margin: 0 auto;
}

.affordable-plans h1 {
  margin-bottom: 2rem;
  color:#009FDA;
  font-size: 65px;
}

.affordable-plans p {
  text-align: left;
  font-size: 2.1rem;
  line-height: 33px;
  max-width: 90rem;
  display: inline-block;
}

ul {
  margin: 0 auto;
  padding-right: 10rem;
}

.items {
  display: flex;
  flex-direction: column;
  position: relative;
}

// vertical line
.items::before {
  content: "";
  position: absolute;
  top: 40px;
  left: calc(50% - 50px);
  width: 2px;
  height: 60%;
  background-color: #009FDA;
  transform: translateX(-50%);

  @media only screen and (min-width: 790px) and (max-width: 958px) {
    top: 58px;
  }
  @media only screen and (min-width: 790px) and (max-width: 988px) {
    height: 58%;
  }

}

.items li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 20px 0;
  padding: 20px;
  position: relative;
  font-size: 2.5rem;
}

// left tier
.items li:nth-child(odd) {
  margin-right: auto;
  text-align: right;
  top: 0;
  padding-right: 5rem;
}

// right tier
.items li:nth-child(even) {
  margin-left: auto;
  text-align: left;
  top: -115px;
  padding-left: 5rem;
}

// dots
.items li:nth-child(even)::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -10px;
  width: 20px;
  height: 20px;
  background-color: #009FDA;
  border: 2px solid #009FDA;
  border-radius: 50%;
  transform: translateY(-100%);
}

.items li:nth-child(odd) span {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}

.items li:nth-child(2n+1)::before {
  background-color: grey;
}

.items li:nth-child(4)::before {
content: "";
position: absolute;
top: 50%;
left: -10px;
width: 20px;
height: 20px;
background-color: #009FDA;
border: 2px solid #009FDA;
border-radius: 50%;
transform: translateY(-50%);
}

.items li:nth-child(5)::before {
  display: none;
}

.items li:nth-child(10)::before {
background-color: grey;
border: grey;
}

.full-rounded {
padding-bottom: 5rem;
}

.show-at-mobile {
  display: none; 
}

.hide-at-mobile {
  display: block;
}

.full-rounded {
  width: 40%;
  margin: auto;
  text-align: center;
}

.full-rounded p{
  font-size: 20px;
  line-height: 3rem; 
  padding-bottom: 2rem;
}




@media only screen and (max-width: 788px) {
  .affordable-plans {
    padding: 1rem 3rem;
    text-align: left;
  }

  .affordable-plans h1 {
    font-size: 25px;
  }
  
  .affordable-plans p {
    font-size: 16px;
    line-height: 2rem;
  }

  .items {
     padding: 1rem 0rem 1rem 3rem;
  }

  .items li {
    position: relative;
    margin-bottom: 40px;
    padding-left: 50px;
    width: 100%;
  }

  .items li:nth-child(odd) {
    text-align: left;
  }

  .dot {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #009FDA;
    position: absolute;
    left: 0;
    top: 10px;
  }

    .line {
      position: absolute;
      width: 2px;
      height: 135%;
      background-color: #009FDA;
      left: 10px;
      top: 20px;
    }

  .items li:last-child .line {
    display: none;
  }

  .items li:nth-last-child(2) .line {
    display: none;
  }

  .items > li:last-child .dot {
     background-color: grey;
  }

  .items li:nth-child(4)::before {
    display: none;
  }


.items li:nth-child(even) {
top: 0;
}

  .items li:nth-child(even)::before {
    display: none;
  }

  .items::before {
    display: none;
  }

  .show-at-mobile {
    display: block;
  }
  .hide-at-mobile {
    display: none;
  }

  .full-rounded {
    width: 100%;
    margin: auto;
    padding: 0rem 3rem 5rem;
  }
  
  .full-rounded p{
    font-size: 20px;
    text-align: left;
    font-size: 16px;
    line-height: 2rem;
    padding-bottom: 1rem;
  }

  h3 {
    font-size: 20px;
    font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
    margin-top: -10px;
  }

  .content p:first-of-type{
    margin: 1rem 0 0 0;
  }

  }

`;

export const HeroHeading = styled.h1`
  color: #4D4D4D;
  margin-bottom: 2.4rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.15);
  margin-bottom: 4rem;
  font-size: 8rem;
  width: 80%;

  @media only screen and (max-width: 1030px) {
    width: 100%;
  }

  @media only screen and (max-width: 620px) {
    width: 100%;
    margin-top: 0;
    font-size: 50px !important;
    margin-bottom: 2rem;
    }
`;

export const HeroSubheading = styled.h4`
  color: #4D4D4D;
  font-family: var(--font-body);
  margin-bottom: 4rem;
  font-size: 2.1rem;
  width: 70%;

  @media only screen and (max-width: 620px) {
   width: 100%;
   font-size: 20px !important;
   margin-bottom: 2rem;
    }

`;