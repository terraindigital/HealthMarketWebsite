import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: var(--color-primary);
  display: block;
  left: 0px;
  min-width: 100%;
  min-width: 100vw;
  opacity: 0;
  padding: 8.9rem 3.4rem 3.4rem;
  position: fixed;
  top: -9999px;
  transition: opacity 0.22s linear;
  z-index: 0;

  &.active {
    bottom: 0;
    opacity: 1;
    top: 0px;
  }

  @media only screen and (max-width: 620px) {
    padding: 5.5rem 2.1rem 2.1rem;
  }
`