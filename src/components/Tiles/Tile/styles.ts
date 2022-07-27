import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: var(--color-accent);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2.1rem;
  position: relative;
  text-align: center;

  flex-basis: calc(25% - 2.1rem);
  width: calc(25% - 2.1rem);

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
`

export const Content = styled.div`
  margin-top: 2.1rem;
  padding: 0 3.4rem 3.4rem;
`