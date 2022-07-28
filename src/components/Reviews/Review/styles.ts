import styled from "@emotion/styled"

export const Wrapper = styled.div`
  flex-basis: 100%;
  min-width: 100%;
  margin: 0 8.9rem 0 0;

  .full-background > & {
    text-align: center;
  }

  & + .review {
    left: 100%;
    position: relative;
  }

  blockquote {
    font-family: var(--font-heading);
    font-size: 5.5rem;
    font-weight: bold;
    margin-left: 0;
    margin-right: 0;
  }

  figcaption > div {
    font-family: var(--font-body);
    font-weight: bold;
    margin: 3.4rem auto;
  }
`