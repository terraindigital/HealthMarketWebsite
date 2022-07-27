import styled from "@emotion/styled"

export const Wrapper = styled.li`
  margin-bottom: 3.4rem;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const Check = styled.div`
  height: 2.1rem;
  left: -30px;
  position: absolute;
  top: 0.3rem;
  width: 2.1rem;
  z-index: 1;

  &:before {
    content: '';
    background-color: var(--color-light);
    border: 2px solid var(--color-accent);
    border-radius: 50%;
    display: block;
    height: 2.1rem;
    left: -3px;
    position: absolute;
    top: 3px;
    width: 2.1rem;
    z-index: -1;
  }
`

export const Heading = styled.h4`
  color: var(--color-primary);
  margin-bottom: 1.3rem;
`
