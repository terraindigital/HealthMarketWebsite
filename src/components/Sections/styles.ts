import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;

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
    padding-bottom: 3.4rem;
    padding-top: 3.4rem;
  }
`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateX(-8.9rem);
  width: calc(100% + 8.9rem);

  h1 {
    background-color: var(--color-primary);
    color: var(--color-light);
    display: inline-block;
    margin: 0;
    padding: 3.4rem 3.4rem 3.4rem 14.4rem;
  }

  h2 {
    font-family: var(--font-body);
    font-size: 2.4rem;
    font-weight: normal;
    margin-bottom: 0;
    max-width: 415px;
  }

  @media only screen and (max-width: 620px) {
    display: block;
    transform: translateX(-2.1rem);

    h1 {
      font-size: 4rem;
      max-width: 100%;
      padding: 0.5rem 2.1rem 0.5rem 3.4rem;
    }

    h2 {
      font-size: 1.8rem;
      margin-bottom: 2.1rem;
      margin-top: 1.3rem;
      max-width: calc(100% - 4.2rem);
      padding-left: 3.4rem;
      padding-right: 2.1rem;
    }
  }
`

export const Inner = styled.div`
  .heading + & {
    padding-top: 8.9rem;

    @media only screen and (max-width: 620px) {
      padding-top: 0;
    }
  }
`