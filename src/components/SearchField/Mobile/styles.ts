import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: var(--color-primary);
  display: block;
  left: 0px;
  min-width: 100%;
  min-width: 100vw;
  opacity: 0;
  position: fixed;
  top: -9999px;
  transition: opacity 0.22s linear;
  z-index: 0;

  &.active {
    bottom: 0;
    opacity: 1;
    top: 0px;
  }
`

export const Logo = styled.img`
  filter: brightness(0) invert(1);
  margin: 2.1rem;
  max-width: 120px;
`

export const CloseButton = styled.button`
  display: block;
  height: 28px;
  position: absolute;
  right: 37px;
  top: 26px;
  width: 28px;

  &:before,
  &:after {
    content: '';
    display: block;
    border-bottom: 1px solid var(--color-light);
    height: 0px;
    position: relative;
    transition: all 0.22s linear;
    width: 24px;
  }

  &:before {
    transform: rotate(45deg) translateY(calc(-50% + 1px));
  }

  &:after {
    transform: rotate(-45deg) translateY(calc(50% - 1px));
  }
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  height: 60vh;
  justify-content: center;
  padding: 3.4rem;

  .search-box {
    display: flex;
    border-bottom: 1px solid var(--color-light);
  }

  .search-box-input,
  .search-box-input::placeholder {
    color: var(--color-light);
    font-family: var(--font-heading);
    font-size: 3.2rem;
    font-weight: bold;
  }

  .search-box-input{
    border: none;
    margin: 0;
    padding: 0;
  }

  .search-box-submit {
    img {
      display: inline;
      filter: brightness(0) invert(1);
      margin: 0;
      vertical-align: middle;
    }
  }
`