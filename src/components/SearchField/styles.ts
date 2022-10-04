import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: var(--color-light);
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
    top: 0;
  }
`

export const TopBar = styled.div`
  background-color: var(--color-primary);
  padding-left: 2.1rem;
  padding-right: 2.1rem;
`

export const Logo = styled.img`
  filter: brightness(0) invert(1);
  max-width: 120px;

  margin-bottom: 2.1rem;
  margin-left: 8.9rem;
  margin-right: 8.9rem;
  margin-top: 3.4rem;

  @media screen and (max-width: 1044px) {
    margin-left: 3.4rem;
    margin-right: 3.4rem;
  }

  @media screen and (max-width: 920px) {
    margin-left: 0;
    margin-right: 0;
  }

  @media only screen and (max-width: 620px) {
    margin-top: 2.1rem;
    margin-left: 0;
    margin-right: 0;
  }
`

export const CloseButton = styled.button`
  display: block;
  height: 28px;
  position: absolute;
  width: 28px;

  right: 93px;
  top: 39px;

  @media screen and (max-width: 1044px) {
    right: 50px;
  }

  @media screen and (max-width: 920px) {
    right: 16px;
  }

  @media only screen and (max-width: 620px) {
    top: 26px;
  }

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
  justify-content: center;

  .search-box {
    border-bottom: 1px solid var(--color-light);
    display: flex;
    margin-bottom: 3.4rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
  }

  .search-box-input,
  .search-box-input::placeholder {
    color: var(--color-light);
    font-family: var(--font-heading);
    font-size: 5.6rem;
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

  @media only screen and (max-width: 788px) {
    .search-box-input,
    .search-box-input::placeholder {
      font-size: 3.2rem;
    }
  }
`

export const Results = styled.div`
  max-height: calc(100vh - 292px);
  overflow-y: auto;
  padding: 4rem;
`