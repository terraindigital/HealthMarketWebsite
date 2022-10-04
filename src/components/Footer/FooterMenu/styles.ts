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

    &.reg-mark {
      position: relative;
  
      &:after {
        content: '®';
        font-size: 70%;
        vertical-align: top;
      }
    }
  }

  a {
    color: var(--color-light);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 788px) {
    flex-basis: calc(50% - 1.3rem);
    width: calc(50% - 1.3rem);

    margin-left: 1.3rem;
    padding-top: 0;

    &:nth-of-type(n+2) {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 620px) {
    margin-left: 0;
    margin-top: 2.1rem;

    &:first-of-type {
      margin-top: 0;
    }
  }
`