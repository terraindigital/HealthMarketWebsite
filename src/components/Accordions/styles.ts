import styled from "@emotion/styled"

export const Wrapper = styled.div`
  cursor: pointer;
  margin: 0;
  position: relative;
  text-align: left;

  &:after {
    content: '';
    border-bottom: 2px solid var(--color-primary);
    border-right: 2px solid var(--color-primary);
    display: block;
    height: 10px;
    position: absolute;
    right: 0;
    top: 36px;
    transform: rotateZ(-45deg);
    width: 10px;
  }

  &:last-of-type {
    margin-bottom: 3.2rem;
  }

  .content {
    height: 0;
    position: relative;
    top: -9999px;
  }

  .title {
    border-color: var(--color-dark);
  }

  &.active {
    &:after {
      transform: rotateZ(45deg)
    }

    .title {
      border-color: transparent;
    }
    
    .content {
      height: auto;
      top: 0px;
    }
  }
`

export const Title = styled.div`
  border-bottom: 1px solid var(--color-dark);
  margin-bottom: 0;
  padding: 2.2rem 0 2.4rem;

  h2 {
    color: var(--color-primary);
    font-size: 3rem;
    margin: 0px;
  }

  @media only screen and (max-width: 620px) {
    margin-bottom: 0px;
    
    h2 {
      font-family: var(--font-body);
      font-size: 2rem;
      max-width: 225px;
    }
  }
`

export const Content = styled.div`
  color: var(--color-dark);
  margin: 0 0 1.7rem 0;

  p {
    font-weight: 400;
    line-height: 130%;

    & + p {
      margin-top: 1.6rem;
    }
  }

  @media only screen and (max-width: 620px) {
    margin-bottom: 0px;
    padding-bottom: 0.8rem;
  }
`