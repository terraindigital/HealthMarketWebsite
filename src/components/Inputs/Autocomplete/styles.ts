import styled from "@emotion/styled";

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
    margin-top: 1.6rem;
    width: 100%;

    img {
      left: 14px;
    }
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
    opacity: 0.6;
  }

  @media only screen and (max-width: 788px) {
    font-size: 1.6rem;
    max-width: 100%;
    min-width: 68.8vw;
    width: 100%;
  }

  @media only screen and (max-width: 620px) {
    padding: 1.6rem 5.6rem 1.8rem 4.2rem;
    min-width: auto;
    width: 100%;
  }
`

export const Options = styled.div`
  background-color: var(--color-light);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  position: absolute;
  text-align: left;
  top: 100%;
  width: 100%;
  z-index: 99;

  .location-option {
    cursor: pointer;
    padding: 2.1rem 2.1rem 2.1rem 6.2rem;
    width: 100%;
  }
`