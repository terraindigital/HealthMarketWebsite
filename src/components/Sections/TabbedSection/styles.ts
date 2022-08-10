import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
`

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.5rem 14.4rem;
  text-align: center;

  & + .section {
    padding-top: 0;
  }

  .section-tab {
    color: var(--color-dark);
    font-size: 1.8rem;
    font-weight: bold;
    margin-right: 2.1rem;
    text-decoration: none;

    &:last-of-type {
      margin-right: 0;
    }

    &:hover {
      text-decoration: underline;
    }

    &.active {
      color: var(--color-primary);
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 620px) {
    padding: 2.4rem 1.6rem;

    overflow-x: scroll;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    &::-webkit-scrollbar { display: none; } /* for Chrome, Safari, and Opera */
  }
`