import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ComponentStyles = css`
  .related-content .be-label {
    display: none;
  }

  .related-content .cards {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 5.6rem;
  }

  @media only screen and (max-width: 788px) {
    .related-content .cards {
      justify-content: center;
    }
  }

  .related-content .cards .card {
    background-color: var(--color-light);
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 2.1rem;
    position: relative;
    text-decoration: none;

    flex-basis: calc(33% - 2.1rem);
    width: calc(33% - 2.1rem);

    margin-right: 2.1rem;
  }

  .related-content .cards .card:nth-of-type(3n-3) {
    margin-right: 0;
  }

  .related-content .cards .card:last-of-type {
    margin-right: 0;
  }

  @media only screen and (max-width: 788px) {
    .related-content .cards .card {
      flex-basis: calc(50% - 2.1rem);
      width: calc(50% - 2.1rem);

      margin-right: 2.1rem;
    }

    .related-content .cards .card:nth-of-type(3n-3) {
      margin-right: 2.1rem;
    }

    .related-content .cards .card:nth-of-type(2n-2) {
      margin-right: 0;
    }

    .related-content .cards .card:last-of-type {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 620px) {
    .related-content .cards .card {
      flex-basis: 100%;
      width: 100%;

      margin-right: 0;
    }
  }
  
  .related-content .card img {
    display: inline;
    height: 326px;
    margin-bottom: 0;
    object-fit: cover;
    width: 100%;
  }

  @media only screen and (max-width: 620px) {
    .related-content .card img {
      height: 219px;
      margin-bottom: 16px;
    }
  }

  .related-content .card .headline {
    color: var(--color-primary);
    font-family: var(--font-heading);
    padding: 3.2rem 3.2rem 2.4rem;
  }

  .related-content .card .desc {
    color: var(--color-dark);
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 2.4rem;
    padding: 0rem 3rem 2.4rem;
  }

  @media only screen and (max-width: 620px) {
    .related-content .card .headline {
      padding-top: 0;
    }
  }
`

export const Wrapper = styled.div`
  // 
`