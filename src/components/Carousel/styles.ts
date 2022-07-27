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

  &.full-background {
    &:before {
      width: 100%;
    }

    .inner {
      text-align: center;
    }
  }

  &.half-background {
    &:before {
      width: 50%;
    }

    .inner {
      margin-left: 8.9rem;
      text-align: left;
    }

    .carousel-nav {
      margin-left: 8.9rem;
    }
  }
`

export const Inner = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  margin-bottom: 3.4rem;

  position: relative;
  z-index: 2;

  blockquote {
    font-size: 5.5rem;
    margin-left: 0;
    margin-right: 0;
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