import styled from "@emotion/styled"

export const Wrapper = styled.div`
  position: relative;

  &.centered {
    display: inline-block;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
  }
`
export const Select = styled.select`
  border-bottom: 2px solid var(--color-accent);
  border-left: none;
  border-right: none;
  border-top: none;
  color: var(--color-dark);
  display: block;
  margin: 3.4rem 0rem;
  min-width: 32rem;
  padding: 2.1rem 2.1rem 2.1rem 4rem;
  position: relative;

  &::placeholder {
    color: var(--color-accent);
  }
`
