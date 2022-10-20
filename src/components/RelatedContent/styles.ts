import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ComponentStyles = css`
  .related-content.be-ix-link-block .be-label {
    display: none;
  }

  .related-content.be-ix-link-block .cards.be-ix-link-container {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 5.6rem;
  }

  @media only screen and (max-width: 788px) {
    .related-content.be-ix-link-block .cards.be-ix-link-container {
      justify-content: center;
    }
  }

  .related-content.be-ix-link-block .cards.be-ix-link-container .card.be-ix-related-link {
    background-color: var(--color-light);
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
    margin: 0 0 2.1rem 0;
    padding: 0;
    position: relative;
    text-decoration: none;

    flex-basis: calc(33% - 2.1rem);
    width: calc(33% - 2.1rem);

    margin-right: 2.1rem;
  }

  .related-content.be-ix-link-block .cards.be-ix-link-container .card:nth-of-type(3n-3) {
    margin-right: 0;
  }

  .related-content.be-ix-link-block .cards.be-ix-link-container .card:last-of-type {
    margin-right: 0;
  }

  @media only screen and (max-width: 788px) {
    .related-content.be-ix-link-block .cards.be-ix-link-container .card.be-ix-related-link {
      flex-basis: calc(50% - 2.1rem);
      width: calc(50% - 2.1rem);

      margin-right: 2.1rem;
    }

    .related-content.be-ix-link-block .cards.be-ix-link-container .card:nth-of-type(3n-3) {
      margin-right: 2.1rem;
    }

    .related-content.be-ix-link-block .cards.be-ix-link-container .card:nth-of-type(2n-2) {
      margin-right: 0;
    }

    .related-content.be-ix-link-block .cards.be-ix-link-container .card:last-of-type {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 620px) {
    .related-content.be-ix-link-block .cards.be-ix-link-container .card.be-ix-related-link {
      flex-basis: 100%;
      width: 100%;

      margin-right: 0;
    }
  }
  
  .related-content.be-ix-link-block .card.be-ix-related-link img {
    display: inline;
    height: 326px;
    margin-bottom: 0;
    object-fit: cover;
    width: 100%;
  }

  @media only screen and (max-width: 620px) {
    .related-content.be-ix-link-block .card.be-ix-related-link img {
      height: 219px;
      margin-bottom: 16px;
    }
  }

  .related-content.be-ix-link-block .card.be-ix-related-link .headline {
    color: var(--color-primary);
    font-family: var(--font-heading);
    padding: 3.2rem 3.2rem 2.4rem !important;
  }

  .related-content.be-ix-link-block .card.be-ix-related-link .desc {
    color: var(--color-dark);
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 2.4rem;
    padding: 0rem 3rem 2.4rem !important;
  }

  @media only screen and (max-width: 620px) {
    .related-content.be-ix-link-block .card.be-ix-related-link .headline {
      padding-top: 0 !important;
    }
  }
`

export const Wrapper = styled.div`
  // 
`