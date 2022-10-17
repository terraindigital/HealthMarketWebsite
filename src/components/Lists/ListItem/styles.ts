import styled from "@emotion/styled"

export const Wrapper = styled.li`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 4rem;
  position: relative;

  opacity: 0;
  transform: translateY(100%);
  transition: all 0.56s linear;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  p {
    font-weight: 400;
    line-height: 160%;
  }

  @media only screen and (max-width: 620px) {
    margin-bottom: 3.2rem;
  }
`

export const Check = styled.div`
  height: 4rem;
  left: -6rem;
  position: absolute;
  top: 0px;
  width: 4rem;
  z-index: 1;

  &:before {
    content: '';
    background-color: var(--color-light);
    border: 2px solid var(--color-accent);
    border-radius: 50%;
    display: block;
    height: 4.5rem;
    left: -3px;
    position: absolute;
    top: 3px;
    width: 4.5rem;
    z-index: -1;
  }

  @media only screen and (max-width: 620px) {
    height: 2.3rem;
    width: 2.3rem;

    left: -3.6rem;

    &:before {
      height: 2.7rem;
      width: 2.7rem;
    }
  }
`

export const Heading = styled.div`
  color: var(--color-primary-dark);
  margin-bottom: 1.6rem;
`