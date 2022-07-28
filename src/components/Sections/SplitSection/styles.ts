import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ backgroundColor }) => backgroundColor};

  padding-bottom: 8.9rem;
  padding-top: 8.9rem;

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

  .left {
    margin-right: 3.4rem;
  }

  .right {
    margin-left: 3.4rem;
  }

  h1 {
    color: var(--color-primary);
    margin-bottom: 2.1rem;

    & + p {
      margin-bottom: 3.4rem
    }
  }
`