import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: var(--color-light-alt);
  border: 0px solid var(--color-accent);
  box-shadow: 5px 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0 1.7rem;
  position: relative;
  text-align: center;

  // animation
  transition: transform 0.22s ease-in-out;

  &:hover {
    border-width: 4px;
    transform: scale(1.1, 1.1)
               translate(1px, -5px);
  }

  & > a {
    display: block;
  }
  
  .gatsby-image-wrapper {
    margin-bottom: 0;
  }

  h4 {
    color: var(--color-accent-alt);
    font-family: var(--font-body);
    margin-bottom: 0;
  }

  img {
    height: 488px;
    object-fit: cover;
    margin-bottom: 0;
    width: 100%;
  }
  
  @media only screen and (max-width: 1044px) {
    flex-basis: calc(33% - 2.1rem);
    min-width: calc(33% - 2.1rem);
    margin-left: 1.05rem;
    margin-right: 1.05rem;
  }

  @media only screen and (max-width: 920px) {
    flex-basis: calc(50% - 2.1rem);
    min-width: calc(50% - 2.1rem);
    margin-left: 1.05rem;
    margin-right: 1.05rem;

    img {
      height: 360px;
    }
  }

  @media only screen and (max-width: 620px) {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
    flex-basis: 183px;
    width: 183px;

    img {
      height: 182px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 11.3rem;
  justify-content: center;
  padding: 1.9rem 3.4rem;

  @media only screen and (max-width: 1460px) {
    height: 9.3rem;
  }

  @media only screen and (max-width: 788px) {
    height: 6.6rem;
    padding: 1.1rem 1.9rem;
  }
`