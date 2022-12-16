import { css } from "@emotion/react";

export const Styles = css`
  .geocode.autocomplete {
    position: relative;
  }

  .input.group {
    display: inline-block;
    margin-top: 3.4rem;
    position: relative;
    text-align: center;
  }

  .input.group img {
    height: 24px;
    left: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-70%);
    z-index: 1;
  }

  input.geocode.input {
    background-color: var(--color-light);
    border-bottom: 7px solid var(--color-accent);
    border-left: none;
    border-right: none;
    border-top: none;
    color: var(--color-dark);
    display: block;
    font-size: 2rem;
    margin: 0 auto;
    min-width: 82rem;
    padding: 2.1rem 2.1rem 2.1rem 6.2rem;
    position: relative;
  }
  
  input.geocode.input::placeholder {
    color: var(--color-accent-alt);
    /* opacity: 0.6; */
  }

  .suggestions {
    background-color: var(--color-light);
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
    left: 0;
    margin: 0 auto;
    position: absolute;
    width: 82rem;
  }

  .centered .suggestions {
    left: 50%;
    transform: translateX(-50%);
  }

  .suggestion {
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 2rem;
    margin-left: 8px;
    opacity: 0.75;
    padding: 10px 14px;
    text-align: left;
    transition: all 0.22s ease-in;
  }

  .suggestion:first-of-type {
    margin-top: 8px;
  }

  .suggestion:last-of-type {
    margin-bottom: 8px;
  }

  .suggestion:hover {
    background-color: var(--color-muted-light);
    border: 1px solid var(--color-muted);
    border-radius: 4px;
    opacity: 1;
    padding-left: 24px;
  }
  
  @media only screen and (max-width: 920px) {
    input.geocode.input {
      font-size: 1.6rem;
      max-width: 100%;
      min-width: 100%;
      width: 88.8vw;
    }
  }

  @media only screen and (max-width: 620px) {
    .input.group {
      margin-top: 1.6rem;
      width: 100%;

      img {
        left: 14px;
      }
    }

    input.geocode.input {
      padding: 1.6rem 5.6rem 1.8rem 4.2rem;
      min-width: 24rem;
      width: 100%;
    }
  }
`