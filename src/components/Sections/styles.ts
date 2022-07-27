import styled from "@emotion/styled"

export const Wrapper = styled.div`
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
    font-family: 'Open Sans';
    font-size: 2.4rem;
    font-weight: normal;
    margin-bottom: 0;
    max-width: 415px;
  }
`

export const Inner = styled.div`
  .heading + & {
    padding-top: 8.9rem;
  }
`