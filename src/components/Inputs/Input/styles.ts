import styled from "@emotion/styled"

export const Wrapper = styled.div`
  position: relative;

  &.centered {
    display: inline-block;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
  }
`

export const Label = styled.label`
  left: 14px;
  position: absolute;
  top: 50%;
  transform: translateY(-11px);
  z-index: 1;

  img { height: 18px; }
`

export const HeroInputField = styled.input`
  border-bottom: 2px solid var(--color-accent);
  border-left: none;
  border-right: none;
  border-top: none;
  color: var(--color-dark);
  display: block;
  margin: 3.4rem 0rem;
  min-width: 32rem;
  padding: 2.1rem 2.1rem 2.1rem 4rem;
  position: relative;

  &::placeholder {
    color: var(--color-accent);
  }
`

export const InputField = styled.input`
  color: var(--color-dark);
`