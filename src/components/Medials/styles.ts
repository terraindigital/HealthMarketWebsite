import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: none;
  &.primary { background-color: var(--color-primary-light); }
  &.accent { background-color: var(--color-accent-light); }

  padding: 8.9rem;

  @media screen and (max-width: 1044px) {
    padding-left: 55px;
    padding-right: 55px;
  }

  @media screen and (max-width: 920px) {
    padding-left: 21px;
    padding-right: 21px;
  }

  .section.accent + &.accent,
  &.accent + .section.accent,
  .section.primary + &.primary,
  &.primary + .section.primary {
    padding-top: 0;
  }

  .chat-bubble {
    max-height: 128px;
  }
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-light);
  border-radius: 4px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 5.5rem;

  h1 {
    color: var(--color-primary);
    line-height: 1.25em;
    margin: 0px;
  }
`