import styled from "@emotion/styled"

export const Wrapper = styled.li`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 4rem;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
  }

  p {
    font-weight: 400;
    line-height: 160%;
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
  color: var(--color-primary);
  margin-bottom: 1.6rem;
`