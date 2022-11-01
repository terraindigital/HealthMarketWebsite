import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: ${props => `${props.background}`};
  display: flex;
  min-height: 600px;
  min-height: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  padding-bottom: 10.4rem;
  padding-top: 21rem;

  padding-left: 8.9rem;
  padding-right: 8.9rem;

  &.centered {
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }

  @media screen and (min-width: 1921px) {
    padding-left: 40rem;
    padding-right: 40rem;
    min-height: 65%;
    min-height: 65vh;
  }

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 920px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
  }

  @media only screen and (max-width: 788px) {
    padding-top: 16.6rem;
    padding-bottom: 22rem;

    &.centered {
      display: block;
      min-height: auto;
    }
  }
`

export const Img = styled.img`
  left: 0;
  height: 100%;
  object-fit: cover;
  object-position: top;
  max-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 0;
  width: auto;
  z-index: 0;
`

export const Inner = styled.div`
  margin: 0;
  max-width: 144rem;
  position: relative;
  width: 100%;
  z-index: 12;

  &.half {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    flex-basis: 72%;
    width: 72%;

    @media only screen and (max-width: 620px) {
      flex-basis: 100%;
      text-align: center;
      width: 100%;
    }
  }

  &.left {
    padding-bottom: 11rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 620px) {
      padding-top: 4rem;
      padding-bottom: 31rem;
      align-items: center;
      width: 100%;
    }
  }

  .boxed & {
    margin: 3.4rem 14.4rem;
    padding: 6rem 12rem;

    @media only screen and (max-width: 788px) {
      margin: 0 auto;
      padding: 4rem 8rem;
    }

    @media only screen and (max-width: 620px) {
      margin: 0 auto;
      padding: 0;
    }
  }

  .boxed.primary & {
    background-color: var(--color-primary);

    @media only screen and (max-width: 620px) {
      background-color: transparent;
    }
  }

  .boxed.accent & {
    background-color: var(--color-accent);

    @media only screen and (max-width: 620px) {
      background-color: transparent;
    }
  }

  @media only screen and (max-width: 340px) {
    width: 100%;
  }
`;