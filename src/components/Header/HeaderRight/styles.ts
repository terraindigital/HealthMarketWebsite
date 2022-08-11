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

  .icon {
    display: inline;
    height: 14px;
    position: relative;
    vertical-align: middle;
    margin: -0.3rem 0.3rem 0 0;
  }
`

export const TextSize = styled.span`
  color: transparent;
  cursor: pointer;
  display: inline-block;
  font-size: 2.5rem;
  font-weight: normal;
  line-height: 100%;
  position: relative;
  width: 2.5rem;
  vertical-align: middle;

  &:before,
  &.increase:after {
    border-bottom: 2px solid var(--color-light);
    content: '';
    display: block;
    height: 0;
    left: 15%;
    position: absolute;
    top: 50%;
    transform: translate(2px,-2px);
    width: 11px;
  }

  &.increase:after {
    transform: rotateZ(90deg) translate(-2px,-2px);
  }

  &.decrease {
    margin-left: 2px;
  }
`

export const SearchButton = styled.img`
 //
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
  
  .light & > div {
    border-color: var(--color-light);
    &:before, &:after { border-color: var(--color-light); }
  }
  
  .dark & > div,
  .stuck & > div {
    border-color: var(--color-dark);
    &:before, &:after { border-color: var(--color-dark); }
  }

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