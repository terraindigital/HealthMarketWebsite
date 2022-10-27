import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.12);
  color: var(--color-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 0;
  min-height: 120px;
  padding-bottom: 0rem;
  padding-left: 8.9rem;
  padding-right: 8.9rem;
  padding-top: 0rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 400;

  a .icon { filter: none; }
  .icon { filter: none; }

  a { color: var(--color-dark); }
  .header-right > div { border-color: var(--color-dark); }
  .header-right .text-size:before,
  .header-right .text-size.increase:after { border-color: var(--color-dark); }

  &.is-stuck {
    color: var(--color-dark);
    a { color: var(--color-dark); }
    .header-right > div { border-color: var(--color-dark); }
    .header-right .text-size:before,
    .header-right .text-size.increase:after { border-color: var(--color-dark); }
  }

  &.takeover-active {
    color: var(--color-light);
    a { color: var(--color-light); }
    a .icon { filter: brightness(0) invert(1); }
    .icon { filter: brightness(0) invert(1); }
    .site-logo { filter: brightness(0) invert(1); }
    .header-right > div { border-color: var(--color-light); }
    .header-right .text-size:before,
    .header-right .text-size.increase:after { border-color: var(--color-light); }
  }

  @media screen and (min-width: 1921px) {
    padding-left: 40rem;
    padding-right: 40rem;
  }

  // @media screen and (max-width: 1044px) {
  //   padding-left: 5.5rem;
  //   padding-right: 5.5rem;
  // }

  @media only screen and (max-width: 1024px) {
    min-height: auto;
    padding-bottom: 2.1rem;
    padding-left: 2.1rem;
    padding-right: 2.1rem;
    padding-top: 2.1rem;
  }
`

export const Logo = styled.img`
  margin: 0;
  max-width: 193px;

  @media only screen and (max-width: 1024px) {
    max-width: 165px;
  }

  @media only screen and (max-width: 620px) {
    max-width: 137px;
  }
`