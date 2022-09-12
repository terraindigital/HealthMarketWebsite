import {css} from "@emotion/react";

export const PageStyles = css`
  .contact.section {
    margin-top: 8.9rem;
  }

  .contact.section [class*=Inner] {
    padding-top: 0;
  }

  .contact.section .section {
    align-items: flex-start;
    margin-top: 2.1rem;
    padding: 0;
  }

  .contact.section .section div h4 {
    font-family: var(--font-body);
  }
  
  .contact.section .section .inner .left h4 {
    font-size: 3.6rem;
    line-height: 115%;
    margin-bottom: 6.4rem;
    margin-top: 2.4rem;
  }
    
  .contact.section .section div .inner .left form p:last-of-type {
    margin-bottom: 4.3rem;
    margin-top: 4.8rem;
  }

  /* TODO: make this sticky */
  .contact.section .inner .right .callout {
    background-color: var(--color-light);
    margin-left: auto;
    margin-right: auto;
  }

  .contact.section .inner .right .callout h1 {
    color: var(--color-accent);
  }

  @media only screen and (max-width: 1440px) {
    .contact.section .section .inner .left h4 {
      font-size: 3.2rem;
    }

    .contact.section .inner .right .callout {
      margin-top: 2.6rem;
    }
  }

  @media only screen and (max-width: 788px) {
    .contact.section {
      margin-top: 12.6rem;
    }

    .contact.section .section .inner .left h4 {
      font-size: 2.4rem;
      margin-bottom: 4rem;
    }
    
    .contact.section .section div h4 + form input {
      margin-top: 0;
      margin-bottom: 4.2rem;
    }
    
    .contact.section .section div h4 + form input:last-of-type {
      margin-bottom: 4rem;
    }
    
    .contact.section .section div h4 + form input[type="checkbox"] {
      margin-bottom: 0;
    }
    
    .contact.section .section div h4 + form h6 {
      display: none;
    }

    .contact.section .contact-disclaimer {
      text-align: center;
    }
    
    .contact.section .section div h4 + form button {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 2.4rem;
      max-width: 33.3rem;
      width: 100%;
    }

    .contact.section .inner .right .callout {
      margin-top: 4rem;
    }

    .contact.section {
      padding-bottom: 4rem;
    }
  }
`