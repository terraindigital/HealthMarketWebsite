import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 1.3rem;
`

export const SearchButton = styled.img`
  height: 24px;
  margin-bottom: 0.5rem;
`

export const Item = styled.div`
  padding-bottom: 0.8rem;
  text-align: center;

  .icon {
    filter: brightness(0) invert(1);
    height: 14px;
    margin: -0.3rem 0.3rem 0 0;
    position: relative;
    vertical-align: middle;
  }

  &, a {
    font-size: 1.2rem;
  }
`