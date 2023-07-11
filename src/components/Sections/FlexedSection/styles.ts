import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding-bottom: 10.4rem;
  padding-top: 10.4rem;

  padding-left: 8.9rem;
  padding-right: 8.9rem;

  @media screen and (min-width: 1921px) {
    padding-left: 40rem;
    padding-right: 40rem;
  }

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 788px) {
    display: block;
    padding-left: 4.8rem;
    padding-right: 4.8rem;
    padding-bottom: 8rem;
    padding-top: 8rem;
  }

  @media screen and (max-width: 620px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
    padding-bottom: 4rem;
    padding-top: 4rem;
  }
`

export const Heading = styled.div`
  display: block;
  flex-basis: 50%;
  width: 50%;

  h2 {
    color: var(--color-light);
    display: inline-block;
    letter-spacing: 1px;
    margin: 0;
    padding: 2.8rem 8.8rem 2.8rem 0rem;
    position: relative;
    z-index: 1;

    &:before {
      background-color: var(--color-primary);
      bottom: 0;
      content: '';
      left: -14.4rem;
      position: absolute;
      top: 0;
      width: calc(100% + 14.4rem);
      z-index: -1;
    }

    @media only screen and (min-width: 1921px) {
      &:before {
        left: -40rem;
        width: calc(100% + 40rem);
      }
    }

    @media only screen and (max-width: 1460px) {
      &:before {
        left: -8.9rem;
        width: calc(100% + 8.9rem);
      }
    }

    @media only screen and (max-width: 788px) {
      font-size: 3.7rem;
      letter-spacing: 0.02em;
      line-height: 115%;
      max-width: 100%;
      padding: 0.5rem 2.1rem;

      &:before {
        left: -4.8rem;
        width: calc(100% + 4.8rem);
      }
    }

    @media only screen and (max-width: 620px) {
      font-size: 4rem;

      &:before {
        left: -2.1rem;
        width: calc(100% + 2.1rem);
      }
    }
  }

  @media only screen and (max-width: 788px) {
    display: block;
    flex-basis: 100%;
    margin-bottom: 3.4rem;
    transform: translateX(-2.1rem);
    width: 100%;
  }

  @media only screen and (max-width: 620px) {
    margin-bottom: 2.4rem;
  }
`

export const Inner = styled.div`
  flex-basis: calc(50% - 9.6rem);
  width: calc(50% - 9.6rem);

  .heading + & {
    padding-top: 8rem;

    @media only screen and (max-width: 1460px) {
      padding-top: 4.8rem;
    }

    @media only screen and (max-width: 620px) {
      padding-top: 2.4rem;
    }
  }

  @media only screen and (max-width: 788px) {
    flex-basis: 100%;
    width: 100%;

    text-align: center;
    margin: 0 auto;
    max-width: 55rem;

    .list {
      margin-left: 4rem;

      & + a {
        margin-left: auto;
      }
    }

    button {
      border-radius: 4px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 3.4rem;
      max-width: 33.3rem;
      width: 100%;
    }
  }

  @media only screen and (max-width: 620px) {
    max-width: 100%;
    
    button {
      margin-top: 0;
      max-width: 100%;
    }
  }
`