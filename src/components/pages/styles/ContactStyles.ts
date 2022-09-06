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
    margin-bottom: 43rem;
    margin-top: 4.8rem;
  }
  
  .contact.section .section div .inner .left form p:last-of-type > a {
    color: var(--color-primary);
    text-decoration: underline;
  }

  @media only screen and (max-width: 620px) {
    .contact.section .section div h3 + form {
      margin-top: 4rem;
    }
    
    .contact.section .section div h3 + form h6 {
      display: none;
    }
    
    .contact.section .section div h3 + form p {
      text-align: center;
    }
    
    .contact.section .section div h3 + form button {
      border-radius: 4px;
      width: 100%;
    }
  }
`