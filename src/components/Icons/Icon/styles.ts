import styled from "@emotion/styled"

export const Wrapper = styled.a`
  background-color: var(--color-light);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2.1rem;
  padding: 2.1rem;
  position: relative;
  text-align: center;

  flex-basis: calc(20% - 2.1rem);
  width: calc(20% - 2.1rem);

  @media only screen and (max-width: 1300px) {
    flex-basis: calc(25% - 2.1rem);
    width: calc(25% - 2.1rem);
  }

  @media only screen and (max-width: 1044px) {
    flex-basis: calc(33% - 2.1rem);
    width: calc(33% - 2.1rem);
  }

  @media only screen and (max-width: 920px) {
    flex-basis: calc(50% - 2.1rem);
    width: calc(50% - 2.1rem);
  }

  @media only screen and (max-width: 620px) {
    align-items: center;
    border-bottom: 1px solid var(--color-primary);
    display: flex;
    flex-basis: 100%;
    margin-bottom: 0px;
    padding: 1.6rem 2.4rem;
    width: 100%;

    &:last-of-type {
      border-bottom: none;
    }
  }
`

export const Img = styled.img`
  display: inline;

  @media only screen and (max-width: 620px) {
    margin: 0;
    max-width: 4.2rem;
    padding: 0;
  }
`

export const Content = styled.div`
  margin-top: 2.1rem;

  h2 {
    color: var(--color-primary);
    margin-bottom: 0;
  }

  @media only screen and (max-width: 620px) {
    margin-top: 0;

    h2 {
      font-family: var(--font-body);
      font-size: 2rem;
      margin-left: 1.6rem;
      text-align: left;
    }
  }
`