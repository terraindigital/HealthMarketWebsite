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

    @media only screen and (max-width: 620px) {
      margin: 3.4rem 2.1rem 3.4rem 0rem;
      transform: none;
    }
  }

  & > a {
    display: block;
  }
  
  .gatsby-image-wrapper {
    margin-bottom: 0;
  }



  h2 {
    color: var(--color-light);
    font-family: var(--font-body);
    font-size: 3.2rem;
    line-height: 115%;
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
  margin-left: 1.05rem;
  margin-right: 1.05rem;

  @media only screen and (max-width: 1600px) {
    h2 {
      font-size: 2rem;
    }
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

    h2 {
      font-size: 1.6rem;
    }
  }
`

export const Content = styled.div`
  margin-top: 2.1rem;
  padding: 0 3.4rem 2.4rem;
`