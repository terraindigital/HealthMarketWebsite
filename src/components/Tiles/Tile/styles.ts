import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: var(--color-accent);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  margin: 3.4rem auto;
  position: relative;
  text-align: center;

  & > a {
    display: block;
  }
  
  .gatsby-image-wrapper {
    margin-bottom: 0;
  }

  h4 {
    color: var(--color-light);
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
  }

  @media only screen and (max-width: 920px) {
    flex-basis: calc(50% - 2.1rem);
    min-width: calc(50% - 2.1rem);
  }

  @media only screen and (max-width: 620px) {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
    flex-basis: 183px;
    min-width: 183px;

    img {
      height: 233px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 11.3rem;
  justify-content: center;
  padding: 1.9rem 3.4rem;
`