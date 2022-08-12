import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-left: 3.4rem;
  padding: 0.5rem 0px;

  &:first-of-type {
    margin-left: 0px;
  }

  h6 {
    border-bottom: 1px dotted var(--color-light);
    color: var(--color-light);
    margin: 0px 0px 0.8rem 0px;
    padding-bottom: 0.8rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
  }

  li {
    color: var(--color-light);
    cursor: pointer;
    padding: 0.5rem 0px;

    &:hover {
      text-decoration: underline;
    }
  }

  a {
    color: var(--color-light);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .fitscore-menu-item {
    background: red;
  }

  @media only screen and (max-width: 620px) {
    margin-left: 0;
    margin-top: 2.1rem;

    &:first-of-type {
      margin-top: 0;
    }
  }
`