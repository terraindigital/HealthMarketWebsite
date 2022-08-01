import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: var(--color-accent);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  margin: 3.4rem auto;
  position: relative;
  text-align: center;

  &.selected {
    margin: 0 3.4rem;
    transform: scale(1.1, 1.1)
               translate(-9px, -5px);
  }

  .gatsby-image-wrapper {
    margin-bottom: 0;
  }

  h2 {
    color: var(--color-light);
    margin-bottom: 0;
  }

  img {
    height: 400px;
    object-fit: cover;
    margin-bottom: 0;
    width: 100%;
  }

  flex-basis: calc(25% - 2.1rem);
  min-width: calc(25% - 2.1rem);
  margin-right: 2.1rem;

  @media only screen and (max-width: 1044px) {
    flex-basis: calc(33% - 2.1rem);
    min-width: calc(33% - 2.1rem);
    margin-right: 2.1rem;
  }

  @media only screen and (max-width: 920px) {
    flex-basis: calc(50% - 2.1rem);
    min-width: calc(50% - 2.1rem);
    margin-right: 2.1rem;
  }

  @media only screen and (max-width: 620px) {
    flex-basis: 100%;
    min-width: 100%;
    margin-right: 0;
  }
`

export const Content = styled.div`
  margin-top: 2.1rem;
  padding: 0 3.4rem 3.4rem;
`