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
    min-width: 410px;
  }

  @media only screen and (max-width: 768px) {
    button {
      font-size: 1.8rem;
      min-width: calc(50% - 2.1rem);
      padding: 1.1rem;
    }
  }
`

export const Btn = styled.button`
  background-color: var(--color-light);
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
  font-size: 2rem;
  font-weight: 600;
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
    height: 24px;
    left: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-14px);
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
  font-size: 2rem;
  margin: 0 auto;
  min-width: 82rem;
  padding: 2.1rem 2.1rem 2.1rem 6.2rem;
  position: relative;

  &::placeholder {
    color: var(--color-accent);
  }

  @media only screen and (max-width: 768px) {
    min-width: auto;
    width: 89.5vw;
  }
`

export const Footer = styled.div`
  margin-top: 3.2rem;

  .centered & {
    margin-left: auto;
    margin-right: auto;
  }

  button {
    max-width: 335px;
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

  .home & { display: none; }

  .centered & {
    justify-content: center;
  }

  img {
    margin-bottom: 0;
    margin-right: 0.8rem;
  }

  a, span {
    color: var(--color-dark);
    font-size: 2.4rem;
    font-weight: bold;
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