import styled from "@emotion/styled"

export const Wrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: none;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;

  &.is-active {
    display: flex;
  }
`

export const Backdrop = styled.div`
  background: var(--color-dark);
  display: block;
  height: 100%;
  opacity: 0;
  position: absolute;
  width: 100%;
  z-index: 0;

  .is-active & {
    opacity: 0.67;
  }
`

export const Inner = styled.div`
  background: var(--color-light);
  opacity: 0;
  padding: 55px 89px;
  position: relative;
  text-align: center;

  .is-active & {
    opacity: 1;
  }

  @media only screen and (max-width: 769px) {
    padding: 21px 34px;
  }
`

export const Close = styled.div`
  cursor: pointer;
  position: absolute;
  right: 21px;
  top: 21px;
`

export const Content = styled.div`
  // 
`

export const Heading = styled.div`
  border-bottom: 2px solid var(--color-accent-alt);
  // color: var(--color-accent-alt);
  margin-bottom: 21px;
  padding-bottom: 13px;
`

export const Subheading = styled.div`
  // 
`