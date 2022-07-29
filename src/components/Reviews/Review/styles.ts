import styled from "@emotion/styled"

export const Wrapper = styled.div`
  flex-basis: 100%;
  min-width: 100%;
  margin: 0 8.9rem 0 0;

  & + .review {
    left: 100%;
    position: relative;
  }

  blockquote {
    font-size: 5.5rem;
    margin-left: 0;
    margin-right: 0;
  }

  figcaption > div {
    margin: 3.4rem auto;
  }
`