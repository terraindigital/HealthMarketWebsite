import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TierListStyles = css`

.center-content {
  text-align: center;
}
.sectionPar {
  max-width: 800px;
  width: 100%;
  text-align: left;
  margin: 0 auto;
}

.affordable-plans {
  margin-bottom: 3rem;
  text-align: center;
}

.affordable-plans h1 {
  margin-bottom: 2rem;
  color:#009FDA;
}
.affordable-plans p {
  text-align: left;
  margin: 0;
  padding: 1rem;
  max-width: 90rem;
  align-self: center;
  display: inline-block;
}

@media (max-width: 768px) {
  .flex-container p {
    font-size: 1.5rem;
  }

  .affordable-plans p {
    padding-left: 20px;
  }

  .sectionPar {
    max-width: 100%;
    font-size: 1.5rem;
  }

  .affordable-plans h1 {
    font-size: 2.5rem;
  }

.items {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.items li {
  position: relative;
  margin-bottom: 40px;
  padding-left: 40px;
}


.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #009FDA;
  position: absolute;
  left: 0;
  top: 10px;
}

  .line {
    position: absolute;
    width: 2px;
    height: 145%;
    background-color: #009FDA;
    left: 5px;
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

  .full-rounded {
    margin-top: 3rem;
  }

  .full-rounded p {
    padding: 1.2rem;
  }

.show-at-mobile {
  display: block;
}

.hide-at-mobile {
  display: none;
}
}

@media (min-width: 769px) {
.show-at-mobile {
  display: block;
}

.hide-at-mobile {
  display: none;
}
}

 @media only screen and (min-width: 788px) {

  .items {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .items::before {
    content: "";
    position: absolute;
    top: 40px;
    left: 50%;
    width: 2px;
    height: 60%;
    background-color: #009FDA;
    transform: translateX(-50%);
  }

  .items li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 20px 0;
    padding: 20px;
    position: relative;
  }

  .items li:nth-child(odd) {
    margin-right: auto;
    text-align: right;
    top: 0;
  }

  .items li:nth-child(even) {
    margin-left: auto;
    text-align: left;
    top: -115px;
  }

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
    .hero > img {
      transform: scaleX(-1);
    }

  .flexed.section p{
    margin-top: 1rem;
    line-height: 4rem;
  }

  .plan .affordable-plans p {
    line-height: 4rem;
  }
  .full-rounded {
  padding-bottom: 5rem;
}

.items li {
  font-size: 2.5rem;
}

.full-rounded p {
  text-align: center;
  max-width: 100%;
}
   .footerContent {
    font-size: 50rem;
  }

  .timeline {
  position: relative;
  margin-left: 20px;
}

.timeline ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.timeline li {
  position: relative;
  margin-bottom: 50px;
}

.timeline li:before {
  content: "";
  position: absolute;
  top: 0;
  left: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ccc;
}

.timeline li:after {
  content: "";
  position: absolute;
  top: 10px;
  left: -5px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #ccc;
}

.timeline .dot {
  position: absolute;
  top: 0;
  left: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  z-index: 1;
}

.timeline .content {
  position: relative;
  padding-left: 60px;
}

.timeline h2 {
  margin-top: 0;
}

.timeline p {
  margin-bottom: 0;
}

.show-at-mobile {
    display: none; /* or inline, inline-block, etc. depending on what you need */
}

.hide-at-mobile {
    display: block;
}

}

`;

export const HeroHeading = styled.h1`
  color: #4D4D4D;
  margin-bottom: 2.4rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.15);
`;

export const HeroSubheading = styled.h4`
  color: #4D4D4D;
  font-family: var(--font-body);
  margin-bottom: 4rem;

`;