import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Prev = styled.div`
  height: 15px;
  margin-right: 1.3rem;
  position: relative;
  width: 6px;

  &:before,
  &:after {
    background-color: var(--color-muted);
    content: "";
    display: block;
    height: 8px;
    position: absolute;
    width: 2px;
  }

  &:before {
    transform: rotateZ(32deg);
    top: 0;
  }

  &:after {
    transform: rotateZ(-32deg);
    top: calc(50% - 1px);
  }
`

export const Next = styled.div`
  height: 15px;
  margin-right: 0;
  margin-left: 1.3rem;
  position: relative;
  width: 6px;

  &:before,
  &:after {
    background-color: var(--color-muted);
    content: "";
    display: block;
    height: 8px;
    position: absolute;
    width: 2px;
  }

  &:before {
    transform: rotateZ(-32deg);
    top: 0;
  }

  &:after {
    transform: rotateZ(32deg);
    top: calc(50% - 1px);
  }
`

export const Dot = styled.div`
  background-color: var(--color-muted);
  border-radius: 50%;
  display: block;
  height: 1.6rem;
  margin-right: 0.8rem;
  position: relative;
  width: 1.6rem;

  &.active {
    background-color: ;var(--color-dark);
  }

  &:last-child {
    margin-right: 0;
  }
`