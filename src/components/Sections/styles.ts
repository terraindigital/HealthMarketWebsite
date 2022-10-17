import styled from "@emotion/styled"

export const OuterWrapper = styled.div`
    overflow-x: hidden;
    width: 100%;
`


export const Wrapper = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;

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

  // if section below has the same background, remove its padding-top
  &.primary + .primary {
    padding-top: 0;
  }
  
  &.accent + .accent {
    padding-top: 0;
  }
  
  &.light + .light {
    padding-top: 0;
  }
`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .has-guarantee & {
    justify-content: flex-start;
  }

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
      font-size: 5.6rem;
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

  h4 {
    font-family: var(--font-body);
    font-weight: normal;
    margin-bottom: 0;
    margin-left: 2.4rem;
    max-width: 38%;

    @media only screen and (min-width: 1921px) {
      margin-left: 8.1rem;
    }

    @media only screen and (max-width: 788px) {
      font-size: 2rem;
      margin-left: 0;
      margin-top: 2.4rem;
      max-width: calc(100% - 4.2rem);
      padding-left: 3.4rem;
      padding-right: 2.1rem;
    }

    @media only screen and (max-width: 620px) {
      
    }
  }

  @media only screen and (max-width: 788px) {
    display: block;
    transform: translateX(-2.1rem);
  }
`

export const Inner = styled.div`
  .heading + & {
    padding-top: 8rem;

    @media only screen and (max-width: 1460px) {
      padding-top: 4.8rem;
    }

    @media only screen and (max-width: 620px) {
      padding-top: 2.4rem;
    }
  }
`
