import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: var(--color-light);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2.1rem;
  position: relative;

  flex-basis: calc(33% - 2.1rem);
  width: calc(33% - 2.1rem);

  &.icon {
    text-align: center;
  }

  .gatsby-image-wrapper {
    margin-bottom: 1.6rem;
  }

  h2 {
    color: var(--color-primary);
    margin-bottom: 1.6rem;
  }

  &.icon img {
    padding: 3.4rem;
  }

  @media only screen and (max-width: 620px) {
    flex-basis: 100%;
    width: 100%;

    &.icon {
      align-items: center;
      border-bottom: 1px solid var(--color-primary);
      display: flex;
      margin-bottom: 0;
      padding: 1.6rem 2.4rem;
      text-align: left;

      &:last-of-type {
        border-bottom: none;
      }

      img {
        height: auto;
        margin: 0;
        max-width: 4.2rem;
        padding: 0px;
      }

      img + [class*=Content] {
        margin-top: 0px;
        padding: 0px;
    
        h2 {
          font-family: var(--font-body);
          font-size: 2rem;
          line-height: 2.6rem;
          margin-bottom: 0px;
          margin-left: 1.6rem;
    
          & + div {
            display: none;
          }
        }
      }
    }
  }
`

export const Img = styled.img`
  display: inline;
`

export const Content = styled.div`
  margin-top: 2.1rem;
  padding: 0 3.4rem 3.4rem;
`