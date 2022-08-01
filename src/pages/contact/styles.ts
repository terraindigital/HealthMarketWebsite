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

  .contact.section .section div .reviews {
    margin-top: 14.4rem;
  }

  .contact.section .section div .reviews:before {
    background-color: var(--color-light);
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
`