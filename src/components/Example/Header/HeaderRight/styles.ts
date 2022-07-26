import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
`

export const Item = styled.div`
  border-right: 1px solid var(--color-dark);
  padding: 0 1.3rem;

  &:last-child {
    border-right: none;
  }

  img {
    height: 14px;
    position: relative;
    vertical-align: middle;
    margin: -0.3rem 0.3rem 0 0;
  }
`

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline;
  height: 28px;
  margin-left: 1.3rem;
  padding: 0;
  width: 28px;

  &.nav-active > div {
    border-color: transparent;
    &:before, &:after { border-color: var(--color-light); }

    &:before { transform: rotate(45deg) translateY(9px); }
    &:after  { transform: rotate(-45deg) translateY(-9px); }
  }
`

export const Bars = styled.div`
  border-bottom: 1px solid var(--color-dark);
  height: 0px;
  position: relative;
  top: -5px;
  transition: all 0.22s linear;
  width: 28px;

  &:before,
  &:after {
    content: '';
    display: block;
    border-bottom: 1px solid var(--color-dark);
    height: 0px;
    position: relative;
    transition: all 0.22s linear;
    width: 28px;
  }

  &:before {
    top: -7px;
  }

  &:after {
    top: 7px;
  }
`