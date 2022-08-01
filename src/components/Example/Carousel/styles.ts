import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding: 5.5rem;
  position: relative;

  &:before {
    content: '';
    background-color: var(--color-accent-light);
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    z-index: 0;
  }

  &.full-background:before {
    width: 100%;
  }

  &.half-background:before {
    width: 50%;
  }
`

export const Inner = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;

  position: relative;
  text-align: center;
  z-index: 2;

  blockquote {
    font-size: 5.5rem
  }

  figcaption > div {
    margin: 3.4rem auto;
  }

  .review {
    flex-basis: 100%;
    min-width: 100%;
    margin-right: 8.9rem;
  }
`