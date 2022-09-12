import styled from "@emotion/styled"

export const Wrapper = styled.a`
  background-color: var(--color-light);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2.1rem;
  margin-right: 2.1rem;
  padding: 2.1rem;
  position: relative;
  text-align: center;
  text-decoration: none;

  flex-basis: calc(20% - 2.1rem);
  width: calc(20% - 2.1rem);

  &:last-of-type {
    margin-right: 0;
  }

  @media only screen and (min-width: 1301px) {
    &:nth-of-type(5n + 5) {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 1300px) and (min-width: 1045px) {
    flex-basis: calc(25% - 2.1rem);
    width: calc(25% - 2.1rem);

    &:nth-of-type(4n + 4) {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 1044px) and (min-width: 921px) {
    flex-basis: calc(33% - 2.1rem);
    width: calc(33% - 2.1rem);

    &:nth-of-type(3n + 3) {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 920px) and (min-width: 621px) {
    flex-basis: calc(50% - 2.1rem);
    width: calc(50% - 2.1rem);

    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 788px) {
    padding-bottom: 4rem;
    padding-top: 4rem;
  }

  @media only screen and (max-width: 620px) {
    align-items: center;
    border-bottom: 1px solid var(--color-primary);
    display: flex;
    flex-basis: 100%;
    margin-bottom: 0px;
    margin-right: 0px;
    padding: 0 2.4rem 0 0;
    width: 100%;

    &:last-of-type {
      border-bottom: none;
    }
  }
`

export const Img = styled.img`
  &.desktop { display: inline; }
  &.mobile { display: none; }

  @media only screen and (max-width: 620px) {
    margin: 0;
    padding: 0;

    &.desktop { display: none; }
    &.mobile { display: inline; }
  }
`

export const Content = styled.div`
  margin-top: 2.1rem;

  h4 {
    color: var(--color-primary);
    font-family: var(--font-heading);
    margin-bottom: 0;
  }

  @media only screen and (max-width: 620px) {
    margin-top: 0;

    h4 {
      font-family: var(--font-body);
      font-size: 2rem;
      font-weight: bold;
      margin-left: 1.6rem;
      text-align: left;
    }
  }
`