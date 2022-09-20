import styled from "@emotion/styled"

export const Btn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline;
  height: 34px;
  margin-left: 1.3rem;
  padding: 0;
  width: 34px;

  .light & > div {
    border-color: var(--color-light);
    &:before, &:after { border-color: var(--color-light); }
  }

  .dark & > div,
  .stuck & > div {
    border-color: var(--color-dark);
    &:before, &:after { border-color: var(--color-dark); }
  }

  &.nav-active > div {
    border-color: transparent;
    top: -10px;
    
    &:before, &:after {
      border-color: var(--color-light);
      left: 3px;
    }

    &:before { transform: rotate(45deg) translate(5px, 13px); }
    &:after  { transform: rotate(-45deg) translate(-1px, -8px); }
  }
`