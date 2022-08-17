import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: block;
  height: 26px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  right: 5rem;
  top: -9999px;
  width: 0px;
  z-index: 1;

  &.active {
    opacity: 1;
    top: 0px;
    width: calc(100% - 5rem);

    .search-box {
      width: calc(100% - 3.4rem);
    }
  }

  .search-box {
    background-color: var(--color-light);
    display: flex;
    flex-wrap: nowrap;
    margin: 0;
    padding: 1px;
    position: absolute;
    right: 3.4rem;
    transition: width 0.22s linear;
    width: 0;

    .search-box-input {
      color: var(--color-dark);
      padding-left: 0.5rem;
      width: calc(100% - 3.4rem);

      &::placeholder {
        color: var(--color-dark);
      }
    }

    .search-box-submit {
      width: 3.4rem;

      img {
        display: inline;
        margin: 0;
        max-width: 18px;
      }
    }
  }
`

export const CloseButton = styled.button`
  background-color: var(--color-accent);
  bottom: 0;
  left: calc(100% - 3.4rem);
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity 0.22s linear;
  width: 3.4rem;

  .active & {
    opacity: 1;
  }
`