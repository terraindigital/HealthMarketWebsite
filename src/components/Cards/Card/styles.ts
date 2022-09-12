import styled from "@emotion/styled"

export const Wrapper = styled.a`
  background-color: var(--color-light);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2.1rem;
  position: relative;
  text-decoration: none;

  flex-basis: calc(33% - 2.1rem);
  width: calc(33% - 2.1rem);

  &.icon {
    text-align: center;
  }

  @media only screen and (max-width: 788px) {
    flex-basis: calc(50% - 2.1rem);
    width: calc(50% - 2.1rem);

    margin-right: 2.1rem;

    &:nth-of-type(2n-2) {
      margin-right: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 620px) {
    flex-basis: 100%;
    width: 100%;

    &.icon {
      border-bottom: 1px solid var(--color-primary);
      margin-bottom: 0;
      padding: 1.6rem 2.4rem;
      text-align: left;

      &:last-of-type {
        border-bottom: none;
      }
    
      .card-content {
        display: none;
      }
    }
  }
`

export const MobileWrapper = styled.div`
  background-color: var(--color-light);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2.1rem;
  position: relative;
  text-decoration: none;

  flex-basis: calc(33% - 2.1rem);
  width: calc(33% - 2.1rem);

  &.icon {
    text-align: center;
  }

  @media only screen and (max-width: 620px) {
    flex-basis: 100%;
    width: 100%;

    &.icon {
      border-bottom: 1px solid var(--color-primary);
      margin-bottom: 0;
      padding: 0 2.4rem 0 0;
      text-align: left;

      &:last-of-type {
        border-bottom: none;
      }
    
      .card-content {
        display: none;
      }
    }

    &.icon.active {
      .card-content {
        display: block;
      }
    }
  }
`

export const Header = styled.div`
  img {
    margin-bottom: 0;
  }

  h4 {
    color: var(--color-primary);
    font-family: var(--font-heading);
    padding: 3.2rem 3.2rem 2.4rem;
  }

  .icon & {
    padding-top: 6rem;

    img {
      margin: 0;
    }

    h4 {
      margin: 0px;
      padding: 1.6rem 0rem;
    }
  }

  @media only screen and (max-width: 620px) {
    min-height: 5.9rem;
    
    .icon & {
      align-items: center;
      display: flex;
      margin-top: 0px;
      padding: 0px;
      position: relative;

      &:after,
      &:before {
        border-left: 1px solid var(--color-primary);
        border-right: 1px solid var(--color-primary);
        border-radius: 2px;
        content: '';
        height: 0.9rem;
        position: absolute;
        right: 0;
        top: calc(50% - 0.65rem);
        width: 0;
        z-index: 1;
      }

      &:before { transform: rotateZ(-45deg) translateY(calc(-50% + 1px)); }
      &:after { transform: rotateZ(45deg) translateY(calc(50% - 1px)); }

      img {
        height: auto;
        margin: 0;
        padding: 0px;
      }

      h4 {
        font-family: var(--font-body);
        font-size: 2rem;
        line-height: 2.6rem;
        margin-top: 0px;
        padding: 0rem 1.6rem;
      }
    }

    .icon.active & {
      &:before {
        right: 0.175rem;
        transform: rotateZ(-135deg) translateX(-0.325rem);
      }
      &:after {
        right: 0.175rem;
        transform: rotateZ(135deg) translateX(0.325rem);
      }
    }
  }
`

export const Img = styled.img`
  display: inline;
`

export const Content = styled.div`
  color: var(--color-dark);
  padding: 3.2rem 3.2rem 6rem;

  h4 {
    color: var(--color-primary);
    font-family: var(--font-heading);
    padding: 0rem 0rem 2.4rem;
  }

  p {
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 0;
  }

  .icon & {
    padding: 0 3.2rem 3.2rem;
    
    h4 {
      margin: 0px;
      padding: 1.6rem 0rem;
    }
  }

  @media only screen and (max-width: 620px) {
    padding-top: 0;

    .icon & {
      margin-top: 1.6rem;
      padding: 0rem;
    }
  }
`