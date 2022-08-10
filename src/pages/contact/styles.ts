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

  .contact.section .section div h3 {
    font-family: var(--font-body);
    font-size: 2.4rem;
  }
    
  .contact.section .section div h3 + form p a {
    color: var(--color-primary);
  }

  .contact.section .section div .reviews {
    margin-top: 14.4rem;
  }

  .contact.section .section div .reviews:before {
    background-color: var(--color-light);
  }

  .contact.section .section div .review:before {
    display: none;
  }

  .contact.section .section div .reviews.full-background .review[class*=Wrapper] {
    text-align: left;
  }

  .contact.section .section div .reviews.full-background .review[class*=Wrapper] div {
    align-items: flex-start;
    justify-content: flex-start;
  }

  .contact.section .section div .reviews.full-background .inner {
    text-align: left;
  }

  .contact.section .section div .reviews.full-background .carousel-nav {
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 5.5rem;
  }

  .contact.section .section div .reviews .review blockquote {
    font-size: 4rem;
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

    .contact.section .section div .reviews {
      margin-top: 4rem;
    }

    .contact.section .section div .reviews > div[class*=Wrapper] {
      display: flex;
      margin: 0;
    }

    .contact.section .section div .reviews > div > .review {
      padding: 2.4rem 1.3rem;
    }

    .contact.section .section div .reviews.full-background .review[class*=Wrapper] div {
      justify-content: center;
    }

    .contact.section .section div .reviews > div > .review figure {
      text-align: center;
    }

    .contact.section .section div .reviews > div > .review blockquote {
      font-size: 3.2rem;
    }

    .contact.section .section div .reviews > div > .review figcaption {
      margin: 1.6rem auto 0px;
    }

    .contact.section .section div .reviews.full-background .carousel-nav {
      justify-content: center;
      margin: 0px;
      transform: translateY(-3.2rem);
    }
  }
`