import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};

  padding-bottom: 10.4rem;
  padding-top: 10.4rem;

  padding-left: 8.9rem;
  padding-right: 8.9rem;

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 920px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
  }
    
  &.align-center .inner {
    align-items: center;
  }

  &.align-top .inner {
    align-items: flex-start;
  }

  &.align-bottom .inner {
    align-items: baseline;
  }

  .inner {
    display: flex;
    justify-content: center;

    h1 {
      color: var(--color-primary);
      margin-bottom: 2.1rem;

      & + p {
        margin-bottom: 3.4rem
      }
    }

    .left {
      flex-basis: 50%;
      max-width: 50%;

      margin-right: 3.4rem;
    }

    .right {
      flex-basis: 50%;
      max-width: 50%;

      margin-left: 3.4rem;
    }

    @media only screen and (max-width: 620px) {
      display: block;
      
      .left,
      .right {
        flex-basis: 100%;
        max-width: 100%;
        margin: 0px;
      }
    }
  }
`