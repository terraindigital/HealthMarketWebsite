import { css } from "@emotion/react";
import styled from "@emotion/styled";
export const IntelligentStyles = css`
  .hide-at-desktop{
display:none;
  }
  .flexed.section p{
    margin-top: 3rem;
    line-height: 3rem;
  }

.cards + .card{
  text-align: center;
}

  .full-rounded button {
    border-radius: 4px;
    padding-left: 6.5rem;
    padding-right: 6.5rem;
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
      .flexed.section p{
    margin-top: 1rem;
    line-height: 3rem;
  }
  }

  @media only screen and (max-width: 620px) {
        .hero > img {
      bottom: -8rem;
      top: auto;
    }
      .flexed.section p{
    margin-top: 1rem;
    line-height: 3rem;
  }



  }
`
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

