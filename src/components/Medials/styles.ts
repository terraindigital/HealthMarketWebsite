import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: none;
  &.primary { background-color: var(--color-primary-light); }
  &.accent { background-color: var(--color-accent-light); }

  padding: 10.4rem 8.9rem;

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 920px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
  }

  .section.accent + &.accent,
  &.accent + .section.accent,
  .section.primary + &.primary,
  &.primary + .section.primary {
    padding-top: 0;
  }

  .chat-bubble {
    max-height: 215px;
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 3.4rem;
    padding-top: 3.4rem;
    
    .chat-bubble {
      margin: 0 auto 2.1rem;
      max-height: 125px;
    }
  }
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-light);
  border-radius: 4px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);

  .two-columns & {
    padding: 8.3rem 14.6rem 8.3rem 12.8rem;
  }

  .three-columns & {
    padding: 4rem 9.6rem;
  }

  h3 {
    color: var(--color-primary);
    line-height: 1.25em;
    margin: 0px;
  }

  @media only screen and (max-width: 768px) {
    display: block;
    padding: 2.1rem 1.3rem;
    text-align: center;

    & > div {
      margin-bottom: 2.4rem;
    }

    p {
      margin-bottom: 1.3rem;
      margin-top: 1.3rem;
    }
  }
`