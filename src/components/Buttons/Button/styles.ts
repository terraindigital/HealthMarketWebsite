import styled from "@emotion/styled"

export const Btn = styled.button`
  background-color: ${props => `var(--color-${props.background})`};
  border: 2px solid ${props => `var(--color-${props.border})`};
  color: ${props => `var(--color-${props.color})`};

  border-radius: 4px;
  font-size: 2.4rem;
  font-weight: bold;
  min-width: 33.3rem;
  padding: 1.3rem 3.4rem;

  // animations
  transition: all 0.22s ease-in-out;

  &:hover {
    background-color: var(--color-light);
    color: ${props => `var(--color-${props.border})`};
  }

  @media only screen and (max-width: 1460px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 788px) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 620px) {
    font-size: 1.6rem;
  }
`