import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ComponentStyles = css`
  .related-content.be-ix-link-block .be-label {
    display: none !important;
  }

  .related-content.be-ix-link-block .cards.be-ix-link-container {
    display: flex !important;
    align-items: stretch !important;
    justify-content: center !important;
    flex-wrap: wrap !important;
    margin-bottom: 5.6rem !important;
  }

  @media only screen and (max-width: 788px) {
    .related-content.be-ix-link-block .cards.be-ix-link-container {
      justify-content: center !important;
    }
  }

  .related-content.be-ix-link-block .cards.be-ix-link-container .card.be-ix-related-link {
    background-color: var(--color-light) !important;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1) !important;
    margin: 0 2.1rem 2.1rem 0 !important;
    padding: 0 !important;
    position: relative !important;
    text-decoration: none !important;

    flex-basis: calc(33% - 2.1rem) !important;
    width: calc(33% - 2.1rem) !important;
  }

  .related-content.be-ix-link-block .cards.be-ix-link-container .card.be-ix-related-link:hover {
    background-color: var(--color-light) !important;
  }

  .related-content.be-ix-link-block .cards.be-ix-link-container .card:nth-of-type(3n-3) {
    margin-right: 0 !important;
  }

  .related-content.be-ix-link-block .cards.be-ix-link-container .card:last-of-type {
    margin-right: 0 !important;
  }

  @media only screen and (max-width: 788px) {
    .related-content.be-ix-link-block .cards.be-ix-link-container .card.be-ix-related-link {
      flex-basis: calc(50% - 2.1rem) !important;
      width: calc(50% - 2.1rem) !important;

      margin-right: 2.1rem !important;
    }

    .related-content.be-ix-link-block .cards.be-ix-link-container .card:nth-of-type(3n-3) {
      margin-right: 2.1rem !important;
    }

    .related-content.be-ix-link-block .cards.be-ix-link-container .card:nth-of-type(2n-2) {
      margin-right: 0 !important;
    }

    .related-content.be-ix-link-block .cards.be-ix-link-container .card:last-of-type {
      margin-right: 0 !important;
    }
  }

  @media only screen and (max-width: 620px) {
    .related-content.be-ix-link-block .cards.be-ix-link-container .card.be-ix-related-link {
      flex-basis: 100% !important;
      width: 100% !important;

      margin-right: 0 !important;
    }
  }
  
  .related-content.be-ix-link-block .card.be-ix-related-link img {
    display: inline !important;
    height: 326px !important;
    margin-bottom: 0 !important;
    object-fit: cover !important;
    width: 100% !important;
  }

  @media only screen and (max-width: 620px) {
    .related-content.be-ix-link-block .card.be-ix-related-link img {
      height: 219px !important;
      margin-bottom: 16px !important;
    }
  }

  .related-content.be-ix-link-block .card.be-ix-related-link .headline {
    color: var(--color-primary) !important;
    font-family: var(--font-heading) !important;
    padding: 3.2rem 3.2rem 2.4rem !important;
  }

  .related-content.be-ix-link-block .card.be-ix-related-link .desc {
    color: var(--color-dark) !important;
    font-weight: 600 !important;
    line-height: 140% !important;
    margin-bottom: 2.4rem !important;
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