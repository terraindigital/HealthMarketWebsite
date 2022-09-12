import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-bottom: 4rem;

  h6 {
    font-weight: normal;
    margin-bottom: 0.8rem;
  }
`

export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2.9rem;

  border: 1px solid var(--color-accent);
  padding: 2.1rem;

  > div {
    flex-basis: calc(33% - 2.1rem);
    max-width: calc(33% - 2.1rem);

    align-items: flex-start;
    display: flex;
  }

  @media only screen and (max-width: 788px) {
    gap: 1.3rem 2.9rem;
  }

  @media only screen and (max-width: 620px) {
    > div {
      flex-basis: calc(50% - 2.1rem);
      max-width: calc(50% - 2.1rem);
    }
  }
`