import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};

  display: flex;
  align-items: flex-start;

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

  @media only screen and (max-width: 620px) {
    display: block;
    padding-bottom: 3.4rem;
  }
`

export const Heading = styled.div`
  display: block;
  min-width: calc(50% + 8.9rem);
  transform: translateX(-8.9rem);

  h2 {
    background-color: var(--color-primary);
    color: var(--color-light);
    display: inline-block;
    letter-spacing: 1px;
    margin: 0;
    padding: 2.8rem 8.8rem 2.8rem 14.4rem;
  }

  @media only screen and (max-width: 620px) {
    display: block;
    margin-bottom: 3.4rem;
    transform: translateX(-2.1rem);

    h2 {
      max-width: 100%;
      padding: 0.5rem 2.1rem 0.5rem 3.4rem;
    }
  }
`

export const Inner = styled.div`
  @media only screen and (max-width: 620px) {
    button {
      border-radius: 4px;
      margin-top: 3.4rem;
      width: 100%;
    }
  }
`