import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding-bottom: 10.4rem;
  padding-top: 10.4rem;

  padding-left: 8.9rem;
  padding-right: 8.9rem;

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media only screen and (max-width: 788px) {
    display: block;
    padding-left: 2.1rem;
    padding-right: 2.1rem;
    padding-bottom: 4rem;
    padding-top: 4rem;
  }
`

export const Heading = styled.div`
  display: block;
  flex-basis: 50%;
  transform: translateX(-8.9rem);
  width: 50%;

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

  @media only screen and (max-width: 788px) {
    display: block;
    flex-basis: 100%;
    margin-bottom: 3.4rem;
    transform: translateX(-2.1rem);
    width: 100%;
  }
`

export const Inner = styled.div`
  flex-basis: calc(50% - 9.6rem);
  width: calc(50% - 9.6rem);

  @media only screen and (max-width: 788px) {
    flex-basis: 100%;
    width: 100%;

    text-align: center;
    margin: 0 auto;
    max-width: 55rem;

    button {
      border-radius: 4px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 3.4rem;
      max-width: 33.3rem;
      width: 100%;
    }
  }

  @media only screen and (max-width: 620px) {
    max-width: 100%;
    
    button {
      max-width: 100%;
    }
  }
`