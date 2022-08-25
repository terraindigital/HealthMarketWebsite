import styled from "@emotion/styled"

export const Wrapper = styled.div`
  flex-basis: 100%;
  min-width: 100%;
  margin: 0 8.9rem 0 0;

  .full-background &.review {
    text-align: center;
  }

  & + .review {
    left: 100%;
    position: relative;
  }

  @media only screen and (max-width: 620px) {
    margin: 0;
    padding: 2.1rem;
    position: relative;

    &:before {
      content: '';
      background-color: var(--color-accent-light);
      height: 100%;
      left: 0px;
      position: absolute;
      top: 0px;
      width: 60%;
      // z-index: 0;
    }

    &:nth-of-type(even) {
      text-align: right;

      &:before {
        left: 40%;
      }
      
      [class*=Wrapper] {
        justify-content: flex-end;
      }
    }

    & [class*=Wrapper],
    & [class*=Figure] {
      position: relative;
      z-index: 1;
    }

    & + .review {
      left: 0;
      margin-top: 3.4rem;
    }
  }
`

export const Figure = styled.figure`
  & + div a {
    color: var(--color-accent);
  }

  @media only screen and (max-width: 620px) {
    & + div {
      display: none;
    }
  }
`

export const Blockquote = styled.blockquote`
  font-family: var(--font-heading);
  font-size: 5.5rem;
  font-weight: bold;
  margin-left: 0;
  margin-right: 0;

  @media only screen and (max-width: 620px) {
    font-size: 3.2rem;
  }
`

export const Figcaption = styled.figcaption`
  > div {
    font-family: var(--font-body);
    font-weight: bold;
    margin: 3.4rem auto;

    @media only screen and (max-width: 620px) {
      margin: 1.3rem auto 0;

      & + div {
        display: none;
      }
    }
  }
`