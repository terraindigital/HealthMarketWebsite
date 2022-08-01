import styled from "@emotion/styled";

export const Wrapper = styled.div`
  //
`

export const Input = styled.input`
  &[type=checkbox] {
    appearance: none;
    --webkit-appearance: none;

    border: 1px solid var(--color-dark);
    border-radius: 2px;
    color: var(--color-dark);
    height: 1.4rem;
    margin-right: 0.8rem;
    transform: translateY(1px);
    width: 1.4rem;

    &:checked {
      background-color: transparent;
      filter: drop-shadow(4px 4px 20px rgba(0, 0, 0, 0.1));
      position: relative;

      &:after {
        content: '/';
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`

export const Label = styled.label`
  //
`