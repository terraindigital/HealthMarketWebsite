import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 2.1rem;
  margin-bottom: 3.4rem;

  h6 {
    font-weight: normal;
    margin-bottom: 0.8rem;
  }
`

export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  border: 1px solid var(--color-accent);
  padding: 2.1rem;

  > div {
    flex-basis: calc(33% - 2.1rem);
    max-width: calc(33% - 2.1rem);

    &:nth-of-type(-n+3) {
      margin-bottom: 2.1rem;
    }
  }
`