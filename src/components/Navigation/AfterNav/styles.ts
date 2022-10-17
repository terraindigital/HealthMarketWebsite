import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 1.3rem;
`

export const TextSize = styled.div`
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
    width: 15px;
  }

  &.increase:after {
    transform: rotateZ(90deg) translate(-2px,-2px);
  }

  &.decrease {
    margin-left: 2px;
  }
`

export const SearchButton = styled.button`
  cursor: pointer;

  &.icon {
    height: 2.5rem;
    margin: 0.8rem auto;
  }
`

export const Item = styled.div`
  padding-bottom: 0.8rem;
  text-align: center;

  .icon {
    filter: brightness(0) invert(1);
    height: 1.9rem;
    margin: -0.3rem 0.3rem 0 0;
    position: relative;
    vertical-align: middle;
  }

  &, a {
    font-size: 1.6rem;
    font-weight: bold;
  }
`