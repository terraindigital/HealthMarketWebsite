import styled from "@emotion/styled"

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

  @media only screen and (max-width: 620px) {
    display: block;
    padding-left: 2.1rem;
    padding-right: 2.1rem;
    padding-bottom: 4rem;
    padding-top: 4rem;
  }
`

export const Heading = styled.div`
  h2 {
    color: var(--color-primary);
    margin-bottom: 5.5rem;
    text-align: center; 
  }

  @media only screen and (max-width: 788px) {
    h2 {
      font-size: 4rem;
      letter-spacing: 0.02em;
      line-height: 115%;
      max-width: 100%;
    }
  }
`

export const Inner = styled.div`
  text-align: center;
`