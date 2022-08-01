import styled from "@emotion/styled"

export const Wrapper = styled.div`
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
    flex-basis: 100%;
    width: 100%;
  }
`

export const Img = styled.img`
  display: inline;
`

export const Content = styled.div`
  margin-top: 2.1rem;

  h2 {
    color: var(--color-primary);
    margin-bottom: 0;
  }
`