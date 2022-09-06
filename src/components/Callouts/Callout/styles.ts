import styled from "@emotion/styled";

export const Wrapper = styled.div`
  flex-basis: calc((100% / 3) - (8.6rem * (2/3)));
  width: calc((100% / 3) - (8.6rem * (2/3)));

  background-color: var(--color-accent-light);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 508px;
  padding: 6.4rem 3.2rem 2.4rem;
  text-align: center;

  margin-right: 8.6rem;

  &:last-of-type {
    margin-right: 0;
  }

  @media only screen and (max-width: 1650px) {
    flex-basis: calc((100% / 3) - (5.4rem * (2/3)));
    width: calc((100% / 3) - (5.4rem * (2/3)));

    margin-right: 5.4rem;
    
    &:last-of-type {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 1440px) {
    flex-basis: calc((100% /  2) - (3.4rem * (1/2)));
    width: calc((100% / 2) - (3.4rem * (1/2)));

    margin-bottom: 3.4rem;
    margin-right: 3.4rem;

    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-basis: 100%;
    width: 100%;

    margin-bottom: 3.4rem;
    margin-right: 0;
  }
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