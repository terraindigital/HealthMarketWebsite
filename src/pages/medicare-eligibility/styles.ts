
import styled from "@emotion/styled"
import {css} from "@emotion/react";

export const RightContent = styled.div`
  margin-left: 3.4rem;
  padding-top: 14.4rem;
  vertical-align: top;

  @media only screen and (max-width: 620px) {
    margin-left: 0;
    padding-top: 4rem;
  }
`

export const PageStyles = css`
  h1, h2, h3 {
    color: var(--color-primary);
  }

  h1 {
    border-bottom: 2px solid var(--color-primary);
    padding-bottom: 0.5rem;
  }

  .right-content > div.centered,
  .right-content > div.centered input,
  .right-content > div:first-of-type,
  .right-content > div:first-of-type select {
    width: 100%;
  }

  .right-content > div.centered input {
    margin-bottom: 2.4rem;
    margin-top: 0.8rem;
  }

  .right-content > div:first-of-type select {
    margin-bottom: 0.8rem;
    margin-top: 0.8rem;
  }

  .right-content > div.centered + button {
    margin-bottom: 1.6rem;
    width: 100%;
  }
`
