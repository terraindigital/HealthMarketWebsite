import styled from "@emotion/styled"

export const Wrapper = styled.div`
  margin: 0;
  position: relative;

  &:after {
    content: '';
    border-bottom: 2px solid var(--color-primary);
    border-right: 2px solid var(--color-primary);
    display: block;
    height: 10px;
    position: absolute;
    right: 0;
    top: 36px;
    transform: rotateZ(-45deg);
    width: 10px;
  }

  .content {
    height: 0;
    position: relative;
    top: -9999px;
  }

  .title {
    border-color: var(--color-dark);
  }

  &.active {
    &:after {
      transform: rotateZ(45deg)
    }

    .title {
      border-color: transparent;
    }
    
    .content {
      height: auto;
      top: 0px;
    }
  }
`

export const Title = styled.div`
  border-bottom: 1px solid var(--color-dark);
  color: var(--color-primary);
  font-size: 3rem;
  margin-bottom: 1.3rem;
  padding: 2.1rem 0px;
`

export const Content = styled.div`
  color: var(--color-dark);
  margin: 0 0 2.1rem 0;
`