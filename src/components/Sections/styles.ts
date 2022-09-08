import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;

  padding-bottom: 10.4rem;
  padding-top: 10.4rem;

  padding-left: 8.9rem;
  padding-right: 8.9rem;

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 788px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
    padding-bottom: 4rem;
    padding-top: 4rem;
  }
`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateX(-8.9rem);
  width: calc(100% + 8.9rem);

  h2 {
    background-color: var(--color-primary);
    color: var(--color-light);
    display: inline-block;
    letter-spacing: 1px;
    margin: 0;
    padding: 2.8rem 8.8rem 2.8rem 14.4rem;

    @media only screen and (max-width: 1460px) {
      padding-left: 8.9rem;
    }

    @media only screen and (max-width: 788px) {
      font-size: 4rem;
      letter-spacing: 0.02em;
      line-height: 115%;
      max-width: 100%;
      padding: 0.5rem 2.1rem;
    }
  }

  h4 {
    font-family: var(--font-body);
    font-weight: normal;
    margin-bottom: 0;
    margin-left: 2.4rem;
    max-width: 38%;

    @media only screen and (max-width: 788px) {
      font-size: 2rem;
      margin-bottom: 2.4rem;
      margin-left: 0;
      margin-top: 2.4rem;
      max-width: calc(100% - 4.2rem);
      padding-left: 3.4rem;
      padding-right: 2.1rem;
    }
  }

  @media only screen and (max-width: 788px) {
    display: block;
    transform: translateX(-2.1rem);
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