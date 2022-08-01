import styled from "@emotion/styled"

export const Btn = styled.button`
  background-color: ${props => `var(--color-${props.background})`};
  border: 2px solid ${props => `var(--color-${props.border})`};
  color: ${props => `var(--color-${props.color})`};
  padding: 13px 34px;
`