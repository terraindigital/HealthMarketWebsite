import styled from "@emotion/styled"

export const Wrapper = styled.li`
  margin-bottom: 4rem;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const Check = styled.div`
  height: 4rem;
  left: -6rem;
  position: absolute;
  top: 0.3rem;
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
`

export const Heading = styled.div`
  color: var(--color-primary);
  margin-bottom: 1.6rem;
`

export const Body = styled.div`
  &, & p {
    font-size: 2rem;
  }
`