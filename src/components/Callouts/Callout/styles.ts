import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: var(--color-accent-light);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 508px;
  padding: 6.4rem 3.2rem 2.4rem;
  text-align: center;
`

export const Heading = styled.div`
  border-bottom: 2px solid var(--color-accent);
`

export const Number = styled.h1`
  color: var(--color-accent);
  margin-bottom: 3.2rem;

  @media only screen and (max-width: 1650px) {
    font-size: 10rem;
  }
  @media only screen and (max-width: 620px) {
    font-size: 8rem;
  }
  @media only screen and (max-width: 360px) {
    font-size: 6rem;
  }
`

export const Tagline = styled.h3`
  margin-bottom: 4rem;
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 26.7rem;

  @media only screen and (max-width: 788px) {
    min-height: auto;
  }
`

export const Body = styled.div`
  //
`

export const Title = styled.h4`
  color: var(--color-accent);
  font-family: var(--font-heading);
  margin-bottom: 1.6rem;
  margin-top: 3.2rem;
`

export const Description = styled.p`
  margin-bottom: 4rem;
`

export const Disclaimer = styled.div`
  p {
    margin-bottom: 0.8rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`