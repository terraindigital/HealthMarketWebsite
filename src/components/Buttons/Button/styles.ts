import styled from "@emotion/styled"

export const Btn = styled.button`
  background-color: ${props => `var(--color-${props.background})`};
  border: 2px solid ${props => `var(--color-${props.border})`};
  color: ${props => `var(--color-${props.color})`};

  border-radius: 4px;
  font-size: 2.4rem;
  font-weight: bold;
  padding: 13px 34px;

  // animations
  transition: all 0.22s ease-in-out;

  // TODO: add vars or work off current vars
  &:hover {
    background-color: var(--color-light);
    color: ${props => `var(--color-${props.border})`};
  }
`