import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  @media only screen and (max-width: 600px) {
    .move-at-mobile {
      background-color: var(--color-accent-alt);
      color: var(--color-light);
      right: -21px;
      padding: 12px 0;
      position: absolute;
      top: -110px;
      width: 100vw;

      &:after {
        content: none;
        display: none;
      }
    }
  }
`

export const Item = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 0 1.6rem;
  white-space: nowrap;
  position: relative;

  .telephone {
    font-weight: 700;
  }

  .icon {
    display: inline;
    height: 23px;
    position: relative;
    vertical-align: middle;
    margin: -0.3rem 0.3rem 0 0;

    &.phone {
      margin-right: 0.8rem;
    }
  }

  @media only screen and (max-width: 788px) {
    font-size: 1.8rem;

    &:last-child {
      padding-right: 0;
    }
  }
  
  &:not(:last-child)::after {
    content: '';
    height: 30px;
    width: 1px;
    background: var(--color-dark);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const LPAgentText = styled.div`
  height: 27px;
  margin-bottom: 4px;
  text-align: center;

  p {
    color: var(--color-primary-dark);
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
  }

  @media only screen and (max-width: 1024px) {
    height: 20px;
    p { font-size: 14px; }
  }

  @media only screen and (max-width: 600px) {
    p {
      color: var(--color-light);
    }
  }
`

export const LPAgentNumber = styled.div`
  height: 42px;
  text-align: center;
  
  a.primary.dark {
    font-size: 32px;
    font-weight: 600;
    line-height: 130%;

    &, &:hover, &:active {
      color: var(--color-primary-dark);
    }
  }

  @media only screen and (max-width: 1024px) {
    height: 32px;
    a.primary.dark { font-size: 22px; }
  }

  @media only screen and (max-width: 600px) {
    a.primary.dark {
      color: var(--color-light);
    }
  }
`

export const Translate = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;

  img {
    margin-bottom: 0;
    margin-right: 6px;
  }

  select {
    font-size: 18px;
    font-weight: 600;
    line-height: 140%;
  }

  @media only screen and (max-width: 1024px) {
    height: 32px;
    select { font-size: 16px; }
  }
`