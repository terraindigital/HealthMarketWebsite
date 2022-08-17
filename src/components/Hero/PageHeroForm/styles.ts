import styled from "@emotion/styled"

export const Wrapper = styled.div`
  &.centered {
    text-align: center;
  }

  &.agent {
    // ...
  }
`

export const Buttons = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: nowrap;

  .centered & {
    justify-content: center;
  }

  button {
    min-width: 305px;
  }

  @media only screen and (max-width: 620px) {
    button {
      font-size: 14px;
      min-width: 50%;
      padding: 11px;
    }
  }
`

export const Btn = styled.button`
  background-color: var(--color-light);
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
  padding: 13px 34px;

  &.accented {
    background-color: var(--color-accent);
    color: var(--color-light);
  }
`

export const Form = styled.form`
  /* change to styled.form */
`

export const InputGroup = styled.div`
  display: inline-block;
  margin-top: 3.4rem;
  position: relative;
  text-align: center;

  img {
    height: 18px;
    left: 14px;
    position: absolute;
    top: 50%;
    transform: translateY(-11px);
    z-index: 1;
  }

  @media only screen and (max-width: 620px) {
    margin-top: 0.8rem;
    width: 100%;
  }
`

export const Input = styled.input`
  border-bottom: 2px solid var(--color-accent);
  border-left: none;
  border-right: none;
  border-top: none;
  color: var(--color-dark);
  display: block;
  margin: 0 auto;
  min-width: 61rem;
  padding: 2.1rem 2.1rem 2.1rem 4rem;
  position: relative;

  &::placeholder {
    color: var(--color-accent);
  }

  @media only screen and (max-width: 620px) {
    min-width: 100%;
  }
`

export const Footer = styled.div`
  margin-top: 4.8rem;
  max-width: 335px;

  .centered & {
    margin-left: auto;
    margin-right: auto;
  }

  button {
    width: 100%;
  }

  @media only screen and (max-width: 620px) {
    margin-top: 1.6rem;
    max-width: 100%;
  }
`

export const CTA = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: no-wrap;
  margin-top: 1.6rem;

  .centered & {
    justify-content: center;
  }

  img {
    margin-bottom: 0;
    margin-right: 0.8rem;
  }

  a, span {
    color: var(--color-dark);
  }

  .light & {
    img {
      filter: brightness(0) invert(1);
    }
  
    a, span {
      color: var(--color-light);
    }
  }
`