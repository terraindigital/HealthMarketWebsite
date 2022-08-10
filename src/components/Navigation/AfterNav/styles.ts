import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 1.3rem;
`

export const SearchButton = styled.img`
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