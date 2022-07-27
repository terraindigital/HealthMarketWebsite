import styled from "@emotion/styled"

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  margin-bottom: 3.4rem;
  padding: 5.5rem;
  position: relative;

  &:before {
    content: '';
    background-color: var(--color-accent-light);
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    z-index: -1;
  }

  &.full-background {
    &:before {
      width: 100%;
    }
  }

  &.half-background {
    &:before {
      width: 50%;
    }
  }
`