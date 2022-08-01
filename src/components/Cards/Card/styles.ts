import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: var(--color-light);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2.1rem;
  position: relative;

  flex-basis: calc(33% - 2.1rem);
  width: calc(33% - 2.1rem);

  &.icon {
    text-align: center;
  }

  .gatsby-image-wrapper {
    margin-bottom: 1.6rem;
  }

  h2 {
    color: var(--color-primary);
    margin-bottom: 1.6rem;
  }

  &.icon img {
    padding: 3.4rem;
  }
`

export const Content = styled.div`
  margin-top: 2.1rem;
  padding: 0 3.4rem 3.4rem;
`