import styled from "@emotion/styled"

export const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 400;

  &.light {
    color: var(--color-light);
    a { color: var(--color-light); }
    a .icon { filter: brightness(0) invert(1); }
    .icon { filter: brightness(0) invert(1); }
    img { filter: brightness(0) invert(1); }
    .header-right > div { border-color: var(--color-light); }
  }

  &.dark,
  &.stuck {
    color: var(--color-dark);
    a { color: var(--color-dark); }
    .header-right > div { border-color: var(--color-dark); }
  }

  &.stuck {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.12);
  }

  &.nav-active {
    color: var(--color-light);
    a { color: var(--color-light); }
    a .icon { filter: brightness(0) invert(1); }
    .icon { filter: brightness(0) invert(1); }
    img { filter: brightness(0) invert(1); }
    .header-right > div { border-color: var(--color-light); }
  }

  padding-bottom: 2.1rem;
  padding-left: 8.9rem;
  padding-right: 8.9rem;
  padding-top: 3.4rem;

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 920px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
  }

  @media only screen and (max-width: 620px) {
    padding-top: 2.1rem;
  }
`

export const Logo = styled.img`
  margin: 0;
  max-width: 120px;
`